import styled from "styled-components";
// import heroImage from '../../images/4124057.jpg'
import heroImage from '../../images/AdobeStock_86477498.jpg'


export const Section = styled.div`
    position: relative;
    background-image: linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),
        url(${heroImage});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Wrapper = styled.div`
    height: 100vh;

    h1 {
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
`;

export const SectionAbout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 32px;
margin: 32px 0;
h3{
    color: var(--color-accent);
    font-size: 30px;
    font-weight: 700;
}
p{
    text-align: center;
    color: var(--color-text);
    font-size: 16px;
    font-weight: 500;
}
span{
    font-weight: 700;
    color: var(--color-text);
    font-size: 20px;
}
ul{
    display: flex;
    text-align: center;
    gap: 12px;
    color: var(--color-text);
    font-size: 16px;
    font-weight: 400;
    li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    padding-right: 12px;
}
}
`;
