import styled from 'styled-components'
import logo from "./img/logo.png"
import Perguntas from './Perguntas'

export default function Top() {
    const Questions = [
        { pergunta: "O que é JSX", resposta: "Uma extensão de linguagem do JavaScript." },
        { pergunta: "O React é?", resposta: "Uma biblioteca JavaScript para construção de interfaces." },
        { pergunta: "Componentes devem iniciar com?", resposta: "Letra maiúscula." },
        { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { pergunta: "O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma." },
        { pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências." },
        { pergunta: "Usamos props para __ ", resposta: "passar diferentes informações para componentes." },
        { pergunta: "Usamos estado (state) para __ ", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente." }]
    
    return (
        <MainTop>

            <Logo>
                <img src={logo} />
                <p>ZapRecall</p>
            </Logo>
            <ContainerPerguntas>
                {Questions.map((Pgt, index)=> (
                    <Perguntas pergunta={Pgt.pergunta} resposta={Pgt.resposta} key={index} index={index} ></Perguntas>
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
    background-color: purple;
    margin-top: 20px;
    
    p{
        font-size: 36px;
        padding: 20px;
    }

    img{
        height: 60px;
    }
`
const ContainerPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: pink;
    margin-top: 30px;
    
    overflow-y: scroll;
    
`