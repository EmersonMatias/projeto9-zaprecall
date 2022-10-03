import styled from 'styled-components'
import logo from "./img/logo.png"
import Perguntas from './Perguntas'

export default function Top({ PerguntaAberta, setPerguntaAberta, RespostaAberta, setRespostaAberta, NãoLembrei, QuaseNLembrei, Zap, Respondido, Questions }) {

    return (
        <MainTop>

            <Logo>
                <img src={logo} alt="Logo ZapRecall" />
                <p>ZapRecall</p>
            </Logo>
            <ContainerPerguntas>
                {Questions.map((Pgt, index) => (
                    <Perguntas data-identifier="flashcard" 
                        pergunta={Pgt.pergunta}
                        resposta={Pgt.resposta} key={index}
                        index={index}
                        PerguntaAberta={PerguntaAberta}
                        setPerguntaAberta={setPerguntaAberta}
                        RespostaAberta={RespostaAberta}
                        setRespostaAberta={setRespostaAberta}
                        Respondido={Respondido}
                        NãoLembrei={NãoLembrei}
                        QuaseNLembrei={QuaseNLembrei}
                        Zap={Zap}>
                    </Perguntas>
                ))}
            </ContainerPerguntas>

        </MainTop>


    )
}

const MainTop = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FB6B6B;
    height: 80vh;

`
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    
    p{
        font-family: Righteous;
        font-size: 36px;
        padding: 20px;
        color: #FFFFFF;
    }

    img{
        height: 60px;
    }
`
const ContainerPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FB6B6B;
    margin-top: 30px;
    
    overflow-y: scroll;
    
`