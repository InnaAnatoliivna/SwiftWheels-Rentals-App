import { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorities, selectFilterMakes } from '../../redux/selectors'
import AdvertsList from '../../components/AdvertsList/AdvertsList'
import LoadMoreButton from '../../components/LoadMore/LoadMore'
import Button from '../../components/Button/Button'
import { Wrapper } from './FavoritesPage.styled'
import { useNavigate } from 'react-router-dom'
// import Loader from '../../components/Loading/Loading'
import DropdownMake from '../../components/DropdownMake/DropdownMake'
import { clearMakes } from '../../redux/reducers/filterSlice'

const FavoritesPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectMakes = useSelector(selectFilterMakes)
    const savedFavorites = useSelector(selectFavorities);
    const [getFavorites, setGetFavorites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 12;
    const [filteredAdverts, setRenderAdverts] = useState(null);
    const [makes, setMakes] = useState(null);

    useEffect(() => {
        // Call clearFilters when the component mounts to ensure filters are cleared initially
        dispatch(clearMakes());
    }, []);

    useEffect(() => {
        if (savedFavorites) {
            setGetFavorites(savedFavorites.slice(0, currentPage * perPage));
        }
    }, [currentPage, dispatch, savedFavorites]);

    useEffect(() => {
        const getMakes = Array.from(new Set(getFavorites.map((advert) => advert.make).flat()));
        setMakes(getMakes);
        if (selectMakes) setRenderAdverts(getFavorites.filter(advert => selectMakes.includes(advert.make)));

    }, [selectMakes, getFavorites, currentPage]);

    const onLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    const isLastPage = getFavorites.length < currentPage * perPage;


    return (
        <Container>
            {
                getFavorites.length > 0
                    ? (<>
                        <DropdownMake makes={makes} />
                        <AdvertsList adverts={selectMakes ? filteredAdverts : getFavorites} />
                    </>)
                    : (<Wrapper>
                        <p>Unfortunately, the list is empty.</p>
                        <Button onClick={() => navigate('/catalog')}>Back to the catalog</Button>
                    </Wrapper>)
            }
            {(!isLastPage && !selectMakes) && <LoadMoreButton onLoadMore={onLoadMore} />}

        </Container>
    )
};

export default FavoritesPage;