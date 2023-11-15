import { nanoid } from 'nanoid'
import Button from '../Button/Button'
import { FlexList, WrappImg, Wrapper } from './AdvertsContent.styled'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritiesID } from '../../redux/selectors';
import AddToFavoritesButton from '../AddToFavoritesButton/AddToFavoritesButton';
// import { useSelector } from 'react-redux'
// import { selectLoadingAdverts } from '../../redux/selectors'
// import Loading from '../Loading/Loading'

const AdvertContent = ({ advert, handleOpenModal }) => {
    const {
        img,
        make,
        year,
        model,
        rentalPrice,
        rentalCompany,
        type,
        id,
        functionalities
    } = advert;

    const getFavorotesID = useSelector(selectFavoritiesID)
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const isAddedToFvrts = getFavorotesID.find(id => advert.id === id);
        if (isAddedToFvrts) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        };
    }, [advert, getFavorotesID])

    const shortestFunctionality = functionalities.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    }, functionalities[0]);

    const addressString = advert.address;
    const addressParts = addressString.split(',').map(part => part.trim());
    const city = addressParts[1];
    const country = addressParts[2];

    const handleLearnMoreClick = () => {
        handleOpenModal(advert);
    }

    return (
        <Wrapper>
            <WrappImg><img src={img} alt='rental car' /></WrappImg>
            <p>{make}<span className='accent'>{model},</span>{year}
                <span className='price'>{rentalPrice}</span>
            </p>
            <FlexList>
                <li key={nanoid()}>{city}  |</li>
                <li key={nanoid()}>{country}  |</li>
                <li key={nanoid()}>{rentalCompany}  |</li>
                <li key={nanoid()}>{model}  |</li>
                <li key={nanoid()}>{type}  |</li>
                <li key={nanoid()}>{id}  |</li>
                <li key={nanoid()}>{shortestFunctionality}</li>
            </FlexList>
            <Button onClick={handleLearnMoreClick}>Learn more</Button>
            <AddToFavoritesButton
                advertId={advert.id}
                isFavorite={isFavorite}
            />
        </Wrapper>
    )
}

export default AdvertContent