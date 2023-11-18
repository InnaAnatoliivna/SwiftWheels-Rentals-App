import Button from '../Button/Button';
import { Wrapper } from './LoadMore.styled';

const LoadMoreButton = ({ onLoadMore }) => {

    console.log('adverts LOAD MORE : START ')


    const handleLoadMore = async (event) => {
        event.preventDefault();
        onLoadMore();
    };

    console.log('adverts LOAD MORE : END ')


    return (
        <Wrapper>
            <Button onClick={handleLoadMore}>Load more</Button>
        </Wrapper>
    );
}


export default LoadMoreButton;
