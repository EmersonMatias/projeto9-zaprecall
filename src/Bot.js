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
                <RedButton onClick={BotãoNãoLembrei}>Não lembrei</RedButton>
                <OrangeButton onClick={BotãoQuaseNLembrei}>Quase não Lembrei</OrangeButton>
                <GreenButton onClick={BotãoZap}>Zap!</GreenButton>
            </div>

            <p>{Respondido.length}/{Questions.length} Concluídos</p>


        </MainBot>
    )
}

const MainBot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    background-color: green;
    height: 20vh;

    div{
        margin-top: 15px;
        width: 100vw;
        background-color: pink;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    p{
        font-size: 20px;
        margin-top: 5vh;
    }

`
const RedButton = styled.button`
    border-radius: 5px;
    background-color: #FF3030;
    color: white;
    width: 85px;
    height: 50px;


`

const OrangeButton = styled.button`
    border-radius: 5px;
    background-color:#FF922E;
    flex-wrap: wrap;
    color: white;
    width: 100px;
    height: 50px;

 
`
const GreenButton = styled.button`
    border-radius: 5px;
    background-color:#2FBE34;
    color: white;
    width: 85px;
    height: 50px;
`