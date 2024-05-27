import styled from 'styled-components'

const Cor = {
    AzulMarinho: "#042940",
    AzulVerde: "#075F73",
    AzulClaro: "#A0CED9",
    White: "#000"
}

export const Footer = styled.footer`
    background-color: ${Cor.AzulMarinho};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px; 
    gap: 0.5em;
    padding-top: 50px;
`
export const Links = styled.div`
    color: white;
    display: flex;
`
export const Span = styled.div`
    margin-left: 15px;
    margin-right: 15px;
`