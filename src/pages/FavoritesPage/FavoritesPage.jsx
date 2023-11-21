import { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { useSelector } from 'react-redux'
import { selectFavoritiesID } from '../../redux/selectors'
import AdvertsList from '../../components/AdvertsList/AdvertsList'
import LoadMoreButton from '../../components/LoadMore/LoadMore'
import { fetchAllAdverts } from '../../redux/operations'
import Button from '../../components/Button/Button'
import { Wrapper } from './FavoritesPage.styled'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loading/Loading'

const FavoritesPage = () => {

    const navigate = useNavigate();
    const getFavoritiesId = useSelector(selectFavoritiesID);
    const [getFavorites, setGetFavorites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 12;
    const [loadingMore, setLoadingMore] = useState(false);

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
            } catch (error) {
                setLoadingMore(false);
                console.error("Error fetching adverts: ", error.message);
                throw error;
            }
        };
        getAllAdverts();
    }, [getFavoritiesId, currentPage]);


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
                            ? <AdvertsList adverts={getFavorites} />
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