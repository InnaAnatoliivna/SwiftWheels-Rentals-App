import { nanoid } from 'nanoid'
import Button from '../Button/Button'
import { FlexList, WrappImg, Wrapper } from './AdvertsContent.styled'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFavoritiesID } from '../../redux/selectors'
import AddToFavoritesButton from '../AddToFavoritesButton/AddToFavoritesButton'
import defaultImage from '../../images/Car-Hire-Online.jpg'
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

    console.log('adverts CONTENT : START USE EFFECT')


    const getFavorotesID = useSelector(selectFavoritiesID)
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // if (advert && getFavorotesID.length > 0) {
        // const isAddedToFvrts = getFavorotesID.find(farId => id === farId);
        const isAddedToFvrts = getFavorotesID && getFavorotesID.length > 0 && getFavorotesID.find(farId => id === farId);
        if (isAddedToFvrts) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        };
        // }
    }, [advert, id, getFavorotesID])

    console.log('adverts CONTENT : END USE EFFECT')

    console.log('TEST REDUCE : ', functionalities)

    // const shortestFunctionality = functionalities.reduce((shortest, current) => {
    //     return current.length < shortest.length ? current : shortest;
    // }, functionalities[0]);
    const shortestFunctionality = functionalities && Array.isArray(functionalities)
        ? functionalities.reduce((shortest, current) => {
            return current.length < shortest.length ? current : shortest;
        }, functionalities[0])
        : '';


    console.log(shortestFunctionality)

    // const addressString = advert.address;
    // const addressParts = addressString.split(',').map(part => part.trim());
    // const city = addressParts[1];
    // const country = addressParts[2];
    const addressString = advert.address || '';
    const addressParts = addressString.split(',').map(part => part.trim());
    const city = addressParts[1] || '';
    const country = addressParts[2] || '';


    const handleLearnMoreClick = () => {
        handleOpenModal(advert);
    }

    console.log('adverts CONTENT : END !!!')


    return (
        <Wrapper>
            <WrappImg><img src={img ? img : defaultImage} alt={`${make} ${model}, ${year}`} /></WrappImg>
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