import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

export const Section = styled.div`
    height: 74px;
    background: #004FF9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFF94C, #004FF9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFF94C, #004FF9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* margin-bottom: 40px; */
    border-bottom: 1px solid red;
`;

export const LinkStyled = styled(NavLink)`
    padding: 24px 8px;
    color: var(--color-hero);
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    transition: color linear 500ms, box-shadow linear 500ms;
    &:hover {
        color: #fff;
    }
    &.active {
        border-bottom: 2px solid rgb(250, 250, 48);
        box-shadow: 2px -21px 15px -10px rgba(250,250,48,0.93) inset;
            -webkit-box-shadow: 2px -21px 15px -10px rgba(250,250,48,0.93) inset;
            -moz-box-shadow: 2px -21px 15px -10px rgba(250,250,48,0.93) inset;
    }
`;

export const LinkLogo = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--color-logo);
    font-size: 24px;
    font-weight: 500;
    line-height: 1;`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    nav {
        display: flex;
        gap: 22px;
        margin-left: auto;
    }
    /* p {
    } */
`;
