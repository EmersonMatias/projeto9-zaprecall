
import Bot from './Bot';
import GlobalStyle from './globalStyle';
import Top from "./Top";
import { useState } from 'react';


export default function App() {
    const Questions = [
        { pergunta: "O que é JSX", resposta: "Uma extensão de linguagem do JavaScript." },
        { pergunta: "O React é?", resposta: "Uma biblioteca JavaScript para construção de interfaces." },
        { pergunta: "Componentes devem iniciar com?", resposta: "Letra maiúscula." },
        { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { pergunta: "O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma." },
        { pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências." },
        { pergunta: "Usamos props para __ ", resposta: "passar diferentes informações para componentes." },
        { pergunta: "Usamos estado (state) para __ ", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente." }]

    const [PerguntaAberta, setPerguntaAberta] = useState(null)
    const [RespostaAberta, setRespostaAberta] = useState(false)
    const [Respondido, setRespondido] = useState([])
    const [NãoLembrei, setNãoLembrei] = useState([])
    const [QuaseNLembrei, setQuaseNLembrei] = useState([])
    const [Zap, setZap] = useState([])

    return (
        <>
            <GlobalStyle />

            <Top
                PerguntaAberta={PerguntaAberta}
                setPerguntaAberta={setPerguntaAberta}
                RespostaAberta={RespostaAberta}
                setRespostaAberta={setRespostaAberta}
                NãoLembrei={NãoLembrei}
                QuaseNLembrei={QuaseNLembrei}
                Zap={Zap}
                Respondido={Respondido}
                Questions={Questions}
            />

            <Bot
                RespostaAberta={RespostaAberta}
                PerguntaAberta={PerguntaAberta}
                setNãoLembrei={setNãoLembrei}
                setQuaseNLembrei={setQuaseNLembrei}
                setZap={setZap}
                NãoLembrei={NãoLembrei}
                QuaseNLembrei={QuaseNLembrei}
                Zap={Zap}
                setPerguntaAberta={setPerguntaAberta}
                setRespostaAberta={setRespostaAberta}
                Respondido={Respondido}
                setRespondido={setRespondido}
                Questions={Questions}
            />
        </>
    )
}
