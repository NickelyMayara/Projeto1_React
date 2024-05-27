import { Container, Titulo1, Texto, ContainerTextos, SecaoAnimais, SecaoInfo, Info1, Info2, Img, ContainerTextosInfo, TextoInfo1, TextoInfo2, TituloAnimal1, TituloAnimal2, TituloSecaoAnimais } from '../Styles/Sobre'

import ImgCavaloMarinho from '../../images/cavalo-marinho.webp'
import ImgAguaViva from '../../images/aguaViva.avif'
import ImgPolvo from '../../images/polvo.jpg'
import ImgCaravela from '../../images/caravela.jpg'
import ImgEstrela from '../../images/estrela.webp'
import fundoOnda from '../../images/fundoOnda.avif'

const Sobre = () => {
    return (
        <Container>
            <ContainerTextos>
                <Titulo1>Quem somos?</Titulo1>
                <Texto>A Escola Internacional de Biologia Marinha e Ecologia Daniel Jouvance, UPMC tem como objetivo favorecer o intercâmbio científico a respeito dos recentes avanços na pesquisa em biologia marinha, ecologia e biotecnologia. A Escola aborda os novos conceitos e técnicas para o estudo de organismos e ecossistemas marinhos e ajuda na difusão de conhecimentos para a preservação desse ambiente. Os cursos são organizados em diversas regiões do mundo em que a economia é fortemente dependente de recursos marinhos (pesca, aquacultura e turismo), tais como Ásia, América Latina e África. A segunda edição do curso aconteceu no Brasil, na sede do IEAPM, a primeira foi no Chile, em 2010. Este ano, as aulas reuniram 30 estudantes, que trabalharam focados nos conceitos e nos processos importantes para os oceanos e os ecossistemas costeiros. O curso é destinado a estudantes brasileiros, franceses e latino-americanos de pós-graduação (Mestrado e Doutorado) e de pós-doutorado em biologia e ecologia marinhas. As aulas foram ministradas por 20 professores-pesquisadores franceses e brasileiros, e incluiu aulas práticas que permitiram aos alunos realizar experimentos com base nas amostras recolhidas em Arraial do Cabo (RJ), assim como análise em laboratórios do IEAPM e a utilização de tutoriais de bioinformática.
                    TEMOS COMO OBJETIVO: - Contribuir para a conservação, preservação, recuperação e manejo do meio ambiente, social e dos bens e valores culturais, visando o desenvolvimento sustentável, permitindo a sobrevivências das futuras gerações.
                    - Ser uma instituição referência, em um ambiente de contínua aprendizagem, para viabilizar projetos socioambientais participativos e de qualidade.
                    - Ética, transparência, sustentabilidade, inovação e inclusão.
                </Texto>
            </ContainerTextos>
            <SecaoAnimais><TituloSecaoAnimais>Conheça alguns Animais Marinhos</TituloSecaoAnimais></SecaoAnimais>
            <SecaoInfo>
                <Info1>
                    <Img src={ImgCavaloMarinho} alt='#' />
                    <ContainerTextosInfo>
                        <TituloAnimal1> Cavalo Marinho</TituloAnimal1>
                        <TextoInfo1>
                            O cavalo-marinho é um pequeno peixe ósseo, que apresenta cabeça alongada, parecida com a de cavalos. Em geral, os cavalos-marinhos tem pouco mais de 15 cm. O cavalo-marinho possui pequenas barbatanas, o que não permite nadar contra a correnteza. Assim, ele prefere ambiente de águas tranquilas e rasas. Esse fato também o torna mais vulnerável à pesca predatória.
                        </TextoInfo1>
                    </ContainerTextosInfo>
                </Info1>

                <Info2>
                    <Img src={ImgCaravela} alt='#' />
                    <ContainerTextosInfo>
                        <TituloAnimal2> Caravela Portuguesa</TituloAnimal2>
                        <TextoInfo2>
                            O cavalo-marinho é um pequeno peixe ósseo, que apresenta cabeça alongada, parecida com a de cavalos. Em geral, os cavalos-marinhos tem pouco mais de 15 cm. O cavalo-marinho possui pequenas barbatanas, o que não permite nadar contra a correnteza. Assim, ele prefere ambiente de águas tranquilas e rasas. Esse fato também o torna mais vulnerável à pesca predatória.
                        </TextoInfo2>
                    </ContainerTextosInfo>
                </Info2>
                <Info1>
                    <Img src={ImgPolvo} alt='#' />
                    <ContainerTextosInfo>
                        <TituloAnimal1> Polvo </TituloAnimal1>
                        <TextoInfo1>
                            O cavalo-marinho é um pequeno peixe ósseo, que apresenta cabeça alongada, parecida com a de cavalos. Em geral, os cavalos-marinhos tem pouco mais de 15 cm. O cavalo-marinho possui pequenas barbatanas, o que não permite nadar contra a correnteza. Assim, ele prefere ambiente de águas tranquilas e rasas. Esse fato também o torna mais vulnerável à pesca predatória.
                        </TextoInfo1>
                    </ContainerTextosInfo>
                </Info1>

                <Info2>
                    <Img src={ImgAguaViva} alt='#' />
                    <ContainerTextosInfo>
                        <TituloAnimal2>Água Viva</TituloAnimal2>
                        <TextoInfo2>
                            O cavalo-marinho é um pequeno peixe ósseo, que apresenta cabeça alongada, parecida com a de cavalos. Em geral, os cavalos-marinhos tem pouco mais de 15 cm. O cavalo-marinho possui pequenas barbatanas, o que não permite nadar contra a correnteza. Assim, ele prefere ambiente de águas tranquilas e rasas. Esse fato também o torna mais vulnerável à pesca predatória.
                        </TextoInfo2>
                    </ContainerTextosInfo>
                </Info2>

                <Info1>
                    <Img src={ImgEstrela} alt='#' />
                    <ContainerTextosInfo>
                        <TituloAnimal1> Estrela </TituloAnimal1>
                        <TextoInfo1>
                            O cavalo-marinho é um pequeno peixe ósseo, que apresenta cabeça alongada, parecida com a de cavalos. Em geral, os cavalos-marinhos tem pouco mais de 15 cm. O cavalo-marinho possui pequenas barbatanas, o que não permite nadar contra a correnteza. Assim, ele prefere ambiente de águas tranquilas e rasas. Esse fato também o torna mais vulnerável à pesca predatória.
                        </TextoInfo1>
                    </ContainerTextosInfo>
                </Info1>
            </SecaoInfo>
        </Container>
    )
}

export default Sobre;