import { Link } from "react-router-dom"

import { Footer, Links, Span } from '../Styles/Rodape'

const Rodape = () => {
    return (
        <Footer>
            <Links>
            <Link className="linkFooter" to='/'> Home</Link>
            <Span>•</Span>
            <Link className="linkFooter" to='sobre'> Sobre</Link>
            <Span>•</Span>
            <Link className="linkFooter" to='contato'> Contato</Link>
            </Links>
            &copy; Todos os direitos reservados
        </Footer >
    )
}

export default Rodape;