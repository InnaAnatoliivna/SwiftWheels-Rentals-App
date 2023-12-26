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
import { clearMakes } from '../../redux/reducers/filterSlice'


const CatalogPage = () => {

    const dispatch = useDispatch();
    const dataAdverts = useSelector(selectAdverts);
    const isLoading = useSelector(selectLoadingAdverts);
    const selectMakes = useSelector(selectFilterMakes);
    const currentPage = useSelector(selectCurrentPage);
    const perPage = useSelector(selectPerPage);
    const [loadingMore, setLoadingMore] = useState(false);
    const [filteredAdverts, setRenderAdverts] = useState(null);
    const [makes, setMakes] = useState(null);

    useEffect(() => {
        // Call clearFilters when the component mounts to ensure filters are cleared initially
        dispatch(clearMakes());
    }, []);

    useEffect(() => {
        const getDataAdverts = async () => {
            try {
                setLoadingMore(true);
                await dispatch(fetchLimitedAdverts())
                setLoadingMore(false);
                // Clear filters when the page changes
                dispatch(clearMakes());
            } catch (error) {
                console.error("Error fetching adverts: ", error);
                setLoadingMore(false);
            }
        };
        getDataAdverts();
    }, [dispatch, currentPage]);

    useEffect(() => {
        const getMakes = Array.from(new Set(dataAdverts.map((advert) => advert.make).flat()));
        setMakes(getMakes);
        if (selectMakes) setRenderAdverts(dataAdverts.filter(advert => selectMakes.includes(advert.make)));
    }, [dataAdverts, selectMakes]);

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
                        <DropdownMake
                            makes={makes}
                        />
                        <AdvertsList adverts={selectMakes ? filteredAdverts : dataAdverts} />
                        {!isLastPage && !selectMakes && <LoadMoreButton onLoadMore={onLoadMore} />}
                    </>)
                }
            </ParentWrapp>
        </Container>
    )
}

export default CatalogPage