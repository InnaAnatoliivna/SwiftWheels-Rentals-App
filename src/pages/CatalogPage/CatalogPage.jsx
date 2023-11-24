import { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import AdvertsList from '../../components/AdvertsList/AdvertsList'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectAdverts,
    selectCurrentPage,
    selectLoadingAdverts,
    selectPerPage,
} from '../../redux/selectors'
import { fetchLimitedAdverts } from '../../redux/operations'
import Loader from '../../components/Loading/Loading'
import { setCurrentPage } from '../../redux/reducers/advertsSlice'
import LoadMoreButton from '../../components/LoadMore/LoadMore'
import { ParentWrapp } from './CatalogPage.styled'
import DropdownMake from '../../components/DropdownMake/DropdownMake'
import { selectFilterMakes } from "../../redux/selectors";


const CatalogPage = () => {

    const dispatch = useDispatch();
    const dataAdverts = useSelector(selectAdverts);
    const isLoading = useSelector(selectLoadingAdverts);
    const selectMakes = useSelector(selectFilterMakes);
    const currentPage = useSelector(selectCurrentPage);
    const perPage = useSelector(selectPerPage);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        const getDataAdverts = async () => {
            try {
                setLoadingMore(true);
                await dispatch(fetchLimitedAdverts())
                setLoadingMore(false);
            } catch (error) {
                console.error("Error fetching adverts: ", error);
                setLoadingMore(false);
            }
        };
        getDataAdverts();
    }, [dispatch, currentPage]);

    const renderAdverts = selectMakes.length > 0
        ? dataAdverts.filter(advert => selectMakes.includes(advert.make))
        : dataAdverts;

    const onLoadMore = () => {
        dispatch(setCurrentPage(currentPage + 1));
    }
    const isLastPage = dataAdverts?.length < currentPage * perPage;


    return (
        <Container>
            <ParentWrapp>
                {isLoading || loadingMore
                    ? <Loader />
                    : (<>
                        <DropdownMake />
                        <AdvertsList adverts={renderAdverts} />
                        {!isLastPage && <LoadMoreButton onLoadMore={onLoadMore} />}
                    </>)
                }
            </ParentWrapp>
        </Container>
    )
}

export default CatalogPage