import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import { Section, SectionAbout, Wrapper } from './HomePage.styled'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/catalog');
    }

    return (
        <>
            <Section>
                <Container>
                    <Wrapper>
                        <h1>Welcome to SwiftWheels Rentals!</h1>
                        <Button onClick={handleButton}>Find a car</Button>
                    </Wrapper>
                </Container>
            </Section>
            <Container>
                <SectionAbout>
                    <p>At SwiftWheels Rentals, we believe in the joy of the journey and the freedom of the open road. Founded with a passion for providing seamless and convenient car rental experiences, we take pride in offering a fleet of exceptional vehicles to suit your every need.</p>
                    <h3>Our Commitment</h3>
                    <p>We understand that every journey is unique, and that`s why our commitment is to provide you with more than just a car – we offer an opportunity to embark on memorable adventures. Whether you`re exploring the city, escaping to the countryside, or embarking on a business trip, SwiftWheels Rentals is here to make your journey extraordinary.</p>
                    <h3>Why Choose SwiftWheels Rentals:</h3>
                    <ul>
                        <li><span>Quality Vehicles:</span><br />Our fleet comprises a diverse selection of meticulously maintained vehicles, ensuring comfort, safety, and style.</li>
                        <li><span>Convenience:</span><br />With SwiftWheels Rentals, renting a car is simple and stress-free. We offer easy online booking, flexible pick-up and drop-off options, and transparent pricing.</li>
                        <li><span>Customer Satisfaction: </span><br />Your satisfaction is our priority. Our team is dedicated to providing exceptional customer service, and we go the extra mile to make your rental experience seamless.</li>
                        <li><span>Affordability: </span><br />We believe that quality car rentals should be accessible to everyone. That`s why we offer competitive rates and a range of options to fit your budget.</li>
                    </ul>
                    <h3>Experience the Freedom</h3>
                    <p>Discover the freedom of the open road with SwiftWheels Rentals. Whether you`re a solo traveler, a family on vacation, or a business professional, we have the perfect vehicle for your journey.</p>
                    <p>Ready to hit the road? Reserve your SwiftWheels experience today!</p>
                </SectionAbout>
            </Container>
        </>
    )
}

export default HomePage