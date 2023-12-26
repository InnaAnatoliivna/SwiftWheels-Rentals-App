import styled from "styled-components"

export const Dropdown = styled.div`
margin: 32px 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
`;

export const Label = styled.label`
color: #8A8A89;
font-size: 14px;
font-weight: 500;
line-height: 18px;
`;

export const Select = styled.select`
width: 300px;
    display: flex;
    padding: 14px 89px 14px 18px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 14px;
    background-color: transparent;
    outline: none;
    option {
        max-width: 100%;
        color: rgba(18, 20, 23, 0.6);
        font-size: 12px;
        font-weight: 500;
        line-height: 20px; /* 125% */
    }
`;