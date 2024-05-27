import { Container, Titulo, Subtitulo, Email, Numero, Infos, Input } from '../Styles/Contato'

const Contato = () => {
    return (
        <Container>
            <Infos>
                <Titulo>Contato:</Titulo>
                <Subtitulo>FALE CONOSCO 📲</Subtitulo>
                <Email>faleconosco@gmail.com</Email>
                <Numero>+55 (082) 99999-9999</Numero>
                <Input type='text' placeholder='Digite aqui sua sugestão...'/>
            </Infos>   
        </Container>

    )
}

export default Contato;