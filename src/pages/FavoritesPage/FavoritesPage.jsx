import { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavoritiesID, selectFilterMakes } from '../../redux/selectors'
import AdvertsList from '../../components/AdvertsList/AdvertsList'
import LoadMoreButton from '../../components/LoadMore/LoadMore'
import { fetchAllAdverts } from '../../redux/operations'
import Button from '../../components/Button/Button'
import { Wrapper } from './FavoritesPage.styled'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loading/Loading'
import DropdownMake from '../../components/DropdownMake/DropdownMake'
import { clearMakes } from '../../redux/reducers/filterSlice'

const FavoritesPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getFavoritiesId = useSelector(selectFavoritiesID);
    const selectMakes = useSelector(selectFilterMakes);
    const [getFavorites, setGetFavorites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 12;
    const [loadingMore, setLoadingMore] = useState(false);
    const [filteredAdverts, setRenderAdverts] = useState(null);
    const [makes, setMakes] = useState(null);

    useEffect(() => {
        // Call clearFilters when the component mounts to ensure filters are cleared initially
        dispatch(clearMakes());
    }, []);

    useEffect(() => {
        const getAllAdverts = async () => {
            try {
                setLoadingMore(true);
                const data = await fetchAllAdverts();
                if (data) {
                    const showFavorites = data.filter(advert => getFavoritiesId.includes(advert.id));
                    setGetFavorites(showFavorites.slice(0, currentPage * perPage));
                }
                setLoadingMore(false);
                // Clear filters when the page changes
                dispatch(clearMakes());
            } catch (error) {
                setLoadingMore(false);
                console.error("Error fetching adverts: ", error.message);
            }
        };
        getAllAdverts();
    }, [getFavoritiesId, currentPage, dispatch]);

    useEffect(() => {
        const getMakes = Array.from(new Set(getFavorites.map((advert) => advert.make).flat()));
        setMakes(getMakes);
        if (selectMakes) setRenderAdverts(getFavorites.filter(advert => selectMakes.includes(advert.make)));

    }, [selectMakes, getFavorites]);


    // console.log(getFavorites)//-------------
    // console.log(filteredAdverts)//-------------
    // console.log(selectMakes)//-------------
    // console.log(makes)//-------------

    const onLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    const isLastPage = getFavorites.length < currentPage * perPage;


    return (
        <Container>
            {loadingMore
                ? <Loader />
                : (<>
                    {
                        getFavorites.length > 0
                            ? (<>
                                <DropdownMake makes={makes} />
                                <AdvertsList adverts={selectMakes.length > 0 ? filteredAdverts : getFavorites} />
                            </>)
                            : (<Wrapper>
                                <p>Unfortunately, the list is empty.</p>
                                <Button onClick={() => navigate('/catalog')}>Back to the catalog</Button>
                            </Wrapper>)
                    }
                    {!isLastPage && <LoadMoreButton onLoadMore={onLoadMore} />}
                </>)}
        </Container>
    )
};

export default FavoritesPage;