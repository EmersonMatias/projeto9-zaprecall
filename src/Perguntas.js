import styled from 'styled-components'
import setaplay from './img/seta_play.png'
import setavirar from './img/seta_virar.png'
import certo from './img/icone_certo.png'
import erro from './img/icone_erro.png'
import quase from './img/icone_quase.png'


export default function Perguntas({ pergunta, resposta, index, PerguntaAberta, setPerguntaAberta, RespostaAberta,
    setRespostaAberta, Respondido, NãoLembrei, QuaseNLembrei, Zap }) {
    const Numero = (index + 1)

    function AbrirPergunta() {
        if (PerguntaAberta === null) {
            setPerguntaAberta(Numero)
        } else {
            alert("Por favor, termine de responder a pergunta aberta.")
        }
    }

    function AbrirResposta() {
        setRespostaAberta(true)
    }

    function CorTexto() {
        if (NãoLembrei.includes(Numero)) {
            return "#FF3030"
        } else if (QuaseNLembrei.includes(Numero)) {
            return "#FF922E"
        } else if (Zap.includes(Numero)) {
            return "#2FBE34"
        }
    }

    function Riscado() {
        if (Respondido.includes(Numero)) {
            return "line-through"
        }
    }

    function MudaImagem() {
        if (NãoLembrei.includes(Numero)) {
            return erro
        } else if (QuaseNLembrei.includes(Numero)) {
            return quase
        } else if (Zap.includes(Numero)) {
            return certo
        } else {
            return setaplay
        }
    }

    return (
        <>
            <NumPergunta onClick={AbrirPergunta} PerguntaAberta={PerguntaAberta} Numero={Numero} Respondido={Respondido} CorTexto={CorTexto} Riscado={Riscado}>
                <p>Pergunta {Numero} </p>
                <img src={MudaImagem()} alt="" />

            </NumPergunta>

            <Pergunta PerguntaAberta={PerguntaAberta} Numero={Numero} RespostaAberta={RespostaAberta}>
                <p>{pergunta}</p>
                <img onClick={AbrirResposta} src={setavirar} alt=""></img>
            </Pergunta>

            <Resposta PerguntaAberta={PerguntaAberta} Numero={Numero} RespostaAberta={RespostaAberta}>
                <p>{resposta}</p>
            </Resposta>
        </>

    )

}


const NumPergunta = styled.div`
    display: ${props => (props.PerguntaAberta === props.Numero) ? "none" : "flex"};
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 80vw;
    min-height: 65px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;

    p{
        margin-left: 10px;
        color: ${props => props.CorTexto};
        font-weight: 700;
        text-decoration: ${props => props.Riscado};
    }

    img{
        height: 20px;
        margin-right: 10px;
    }
   
`
const Pergunta = styled.div`
    display: ${props => props.PerguntaAberta === props.Numero && props.RespostaAberta === false ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFD4;
    width: 80vw;
    min-height: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;

    p{
        margin-top: 20px;
    }
    
    img{
        width: 25px;
        margin-bottom: 10px;
        margin-left: 80%;
       
    }
    
`
const Resposta = styled.div`
    display: ${props => props.RespostaAberta === true && props.PerguntaAberta === props.Numero ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    background-color: #FFFFD4;
    width: 80vw;
    min-height: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;

    p{
        margin-top: 20px;
        text-align: center;
    }

`
