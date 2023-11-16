import { useEffect } from 'react'
import Container from '../../components/Container/Container'
import AdvertsList from '../../components/AdvertsList/AdvertsList'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectAdverts,
    selectCurrentPage,
    selectLoadingAdverts,
    selectPerPage
} from '../../redux/selectors'
import { fetchLimitedAdverts } from '../../redux/operations'
import Loading from '../../components/Loading/Loading'
import { setCurrentPage } from '../../redux/reducers/advertsSlice'
import LoadMoreButton from '../../components/LoadMore/LoadMore'

const CatalogPage = () => {
    const dispatch = useDispatch();
    const dataAdverts = useSelector(selectAdverts);
    const isLoading = useSelector(selectLoadingAdverts);
    const currentPage = useSelector(selectCurrentPage);
    const perPage = useSelector(selectPerPage);

    useEffect(() => {
        const getDataAdverts = async () => {
            try {
                await dispatch(fetchLimitedAdverts())
            } catch (error) {
                console.error("Error fetching adverts: ", error);
            }
        };
        getDataAdverts();
    }, [dispatch, currentPage]);

    const onLoadMore = async () => {
        dispatch(setCurrentPage(currentPage + 1));
    }
    const isLastPage = dataAdverts?.length < currentPage * perPage;

    return (
        <Container>
            {isLoading
                ? <Loading />
                : (<>
                    <AdvertsList adverts={dataAdverts} />
                    {!isLastPage && <LoadMoreButton onLoadMore={onLoadMore} />}
                </>)
            }
        </Container>
    )
}

export default CatalogPage