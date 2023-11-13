import styled from "styled-components";
// import heroImage from '../../images/4124057.jpg'
import heroImage from '../../images/AdobeStock_86477498.jpg'


export const Section = styled.div`
    position: relative;
    background-image: linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),
        url(${heroImage});
    background-size: cover;
    background-repeat: no-repeat;
    /* &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            180deg,
            rgba(18, 20, 23, 0.50) 2.5%,
            rgba(18, 20, 23, 0.00) 41.07%
        );
        border-radius: 14px;
    } */
`

export const Wrapper = styled.div`
    height: 100vh;

    h2 {
        color: var(--color-hero);
        width: 100%;
        /* max-width: 598px; */
        font-size: 40px;
        font-weight: 700;
        line-height: 1.2; /* 111.429% */
        letter-spacing: 0.7px;
        text-align: center;
        margin-bottom: 32px;
    }
    /* margin: 0 auto; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    gap: 28px;
`