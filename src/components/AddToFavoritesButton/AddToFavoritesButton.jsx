import sprite from '../../icon/icon-sprite.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectAdverts, selectFavorities,
} from '../../redux/selectors'
import { addFavorite, deleteFavorite } from '../../redux/reducers/favoritiesSlice'
import { Icon } from './AddToFavoritesButton.styled'

const AddToFavoritesButton = ({ advertId, isFavorite }) => {
    const dispatch = useDispatch();
    const dataAdverts = useSelector(selectAdverts);
    const savedFavorites = useSelector(selectFavorities);

    const handleClick = id => {
        const favoritToRemove = dataAdverts?.find(advert => advert.id === id);
        const favoriteToAdd = savedFavorites?.find(advert => advert.id === id);
        if (isFavorite) dispatch(deleteFavorite(favoriteToAdd));
        else dispatch(addFavorite(favoritToRemove));
    }

    return (
        <div onClick={() => handleClick(advertId)}>
            <Icon width='24' height='24' className={isFavorite && 'active'}>
                <use href={`${sprite}#icon-heart`} />
            </Icon>
        </div>
    )
}

export default AddToFavoritesButton;