import Container from '../Container/Container'
import { LinkLogo, LinkStyled, Section, Wrapper } from './Header.styled'
import logo from '../../icon/car-vehicle-line.png'


const Header = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <p><LinkLogo to='/'>
                        <img src={logo} width='150' />
                        SwiftWheels Rentals</LinkLogo></p>
                    <nav>
                        <LinkStyled to='/catalog'>Catalog</LinkStyled>
                        <LinkStyled to='/favorites'>Favorites</LinkStyled>
                    </nav>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Header