import styled from 'styled-components'

export default function Bot({ RespostaAberta, PerguntaAberta, setNãoLembrei, setQuaseNLembrei,
    setZap, NãoLembrei, QuaseNLembrei, Zap, setRespostaAberta, setPerguntaAberta, Respondido, setRespondido, Questions }) {


    function BotãoNãoLembrei() {

        if (PerguntaAberta === null) {
            alert("Por favor, abra uma pergunta primeiro")
        } else if (RespostaAberta === false) {
            alert("Por favor, abra a resposta primeiro")
        } else {
            setNãoLembrei([...NãoLembrei, PerguntaAberta])
            setRespondido([...Respondido, PerguntaAberta])
            setPerguntaAberta(null)
            setRespostaAberta(false)
        }

    }

    function BotãoQuaseNLembrei() {
        if (PerguntaAberta === null) {
            alert("Por favor, abra uma pergunta primeiro")
        } else if (RespostaAberta === false) {
            alert("Por favor, abra a resposta primeiro")
        } else {
            setQuaseNLembrei([...QuaseNLembrei, PerguntaAberta])
            setRespondido([...Respondido, PerguntaAberta])
            setPerguntaAberta(null)
            setRespostaAberta(false)
        }
    }

    function BotãoZap() {
        if (PerguntaAberta === null) {
            alert("Por favor, abra uma pergunta primeiro")
        } else if (RespostaAberta === false) {
            alert("Por favor, abra a resposta primeiro")
        } else {
            setZap([...Zap, PerguntaAberta])
            setRespondido([...Respondido, PerguntaAberta])
            setPerguntaAberta(null)
            setRespostaAberta(false)
        }
    }


    return (
        <MainBot>
            <div>
                <RedButton onClick={BotãoNãoLembrei} data-identifier="forgot-btn">Não lembrei</RedButton>
                <OrangeButton onClick={BotãoQuaseNLembrei} data-identifier="almost-forgot-btn">Quase não Lembrei</OrangeButton>
                <GreenButton onClick={BotãoZap} data-identifier="zap-btn">Zap!</GreenButton>
            </div>

            <p data-identifier="flashcard-counter">{Respondido.length}/{Questions.length} Concluídos</p>


        </MainBot>
    )
}

const MainBot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    height: 20vh;

    div{
        margin-top: 15px;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    p{
        font-family: Recursive;
        font-size: 20px;
        margin-top: 5vh;
    }

`
const RedButton = styled.button`
    font-family: Recursive;
    border-radius: 5px;
    background-color: #FF3030;
    color: white;
    width: 85px;
    height: 50px;
    border: none;


`

const OrangeButton = styled.button`
    font-family: Recursive;
    border-radius: 5px;
    background-color:#FF922E;
    flex-wrap: wrap;
    color: white;
    width: 100px;
    height: 50px;
    border: none;
 
`
const GreenButton = styled.button`
    font-family: Recursive;
    border-radius: 5px;
    background-color:#2FBE34;
    color: white;
    width: 85px;
    height: 50px;
    border: none;
`