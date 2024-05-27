import navbar from '../../images/navbar.jfif'
import info from '../../images/info.png'

import { ImgNav, Titulo, Texto, Info, Informacoes} from '../Styles/Home'


const Home = () => {
    return(
        <>
        <ImgNav src={navbar} alt="#"/>
        <Titulo>Biologando</Titulo>
        <Informacoes>
            <Info src={info} alt="#"/>
        <Texto>O resultado de tamanha presença é um enorme impacto ecológico. Em artigo publicado na PLoS Biology, o grupo liderado por Florent Angly, do Departamento de Biologia da Universidade de San Diego, nos Estados Unidos, detalha os resultados de um levantamento sobre a diversidade de bacteriófagos em amostras de água recolhidas durante dez anos em 68 locais de quatro regiões oceânicas: golfo do México, mar de Sargasso, costa da Colúmbia Britânica e oceano Ártico. Os pesquisadores analisaram características genéticas, a diversidade e a distribuição geográfica das amostras. A diversidade foi a maior surpresa, ao se verificar que 91% das seqüências de DNA dos vírus não estavam presentes.</Texto>
        </Informacoes>
        
        </>
    )
}

export default Home;