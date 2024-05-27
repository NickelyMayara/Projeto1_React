import styled from "styled-components"

const Cor = {
    AzulMarinho: "#042940",
    AzulVerde: "#075F73",
    AzulClaro: "#A0CED9",
    White: "#000"
}

export const ImgNav = styled.img`
    height:100vh;
    width: 100%;
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

export const Titulo = styled.h1`
    margin-top: 100px;
    color: ${Cor.AzulMarinho};
    font-family: cursive, 'Times New Roman', Times, serif;
    font-size: 40px;
    font-weight: 900;
    display: flex;
    justify-content: center;
`

export const Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Texto = styled.p`
    color: ${Cor.AzulMarinho};
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    width: 1000px;
    margin-top: 100px;
    margin-bottom: 100px;
    text-align: justify;
    line-height: 35px;
`

export const Info = styled.img`
    margin-top: 50px;
    width: 900px;
    display: flex;
    justify-content: center;
`