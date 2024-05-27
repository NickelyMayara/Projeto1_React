import styled from "styled-components"
import fundo from '../../images/fundoOnda.avif'

const Cor = {
    AzulMarinho: "#042940",
    AzulVerde: "#075F73",
    AzulClaro: "#A0CED9",
    White: "#fff"
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Cor.AzulMarinho};
    margin: 0;
    padding: 0;
`

export const ContainerTextos = styled.div`
    padding: 100px 400px 200px 300px;
    min-height: 400px;
`

export const Titulo1 = styled.h1`
    margin-bottom: 40px;
    color: white;
    font-size: 35px;
    font-family: cursive, 'Times New Roman', Times, serif;
`

export const Texto = styled.p`
    margin: 0;
    padding: 0;
    color: white;
    font-family: "Nunito Sans", sans-serif;
    font-size: 15px;
    line-height: 31px;
    font-weight: 600;
    text-align: justify;
`
export const Fundo = styled.img`
    background-image: url(${fundo});
`

export const SecaoAnimais = styled.section`
    background-color: ${Cor.White};
    height: 100%;
`

export const TituloSecaoAnimais = styled.h1`
    margin: 0;
    color: ${Cor.AzulMarinho};
    padding: 50px;
    text-align: center;
    font
`
export const SecaoInfo = styled.section`
    display: flex;
    flex-direction: column;
`

export const Info1 = styled.div`
    background-color: ${Cor.AzulClaro};
    display: flex;
    align-items: center;
`

export const Info2 = styled.div`
    background-color: ${Cor.AzulMarinho};
    display: flex;
    align-items: center;
`

export const ContainerTextosInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`

export const TituloAnimal1 = styled.div`
    color: ${Cor.AzulMarinho};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 600;
`

export const TituloAnimal2 = styled.div`
    color: ${Cor.AzulClaro};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 600;
`

export const Img = styled.img`
    width: 230px;
    height: 230px;
    padding: 15px 100px;
    border-radius: 15px;
`
export const TextoInfo1 = styled.p`
    margin: 20px 300px 0px 0px;
    color: ${Cor.AzulMarinho};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    font-weight: 600;
`

export const TextoInfo2 = styled.p`
    margin: 20px 300px 0px 0px;
    color: ${Cor.AzulClaro};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    font-weight: 600;
`