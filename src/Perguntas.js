import styled from 'styled-components'
import setaplay from './img/seta_play.png'
import setavirar from './img/seta_virar.png'
import { useState } from 'react'

export default function Perguntas({pergunta, resposta, index}) {
    const [Abriu, setAbriu] = useState(false)
    const [Virou, setVirou] = useState(false)


    function AbrirPergunta() {
        setAbriu(true)
    }

    function VirarPergunta(){
        setVirou(true)
    }

    return (
        <>
            <NumPergunta  onClick={AbrirPergunta} Abriu={Abriu} Virou={Virou}>
                <p>Pergunta {index+1} </p>
                <img src={setaplay} />

            </NumPergunta>

            <Pergunta Abriu={Abriu} Virou={Virou}>
                <p>{pergunta}</p>
                <img src={setavirar} onClick={VirarPergunta}></img>
            </Pergunta>

            <Resposta Virou={Virou}>
                <p>{resposta}</p>
            </Resposta>
        </>

    )

}


const NumPergunta = styled.div`
    display: ${props => (props.Abriu === true || props.Virou === true) ? "none" : "flex"};
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
    }

    img{
        height: 20px;
        margin-right: 10px;
    }
   
`
const Pergunta = styled.div`
    display: ${props => (props.Abriu === true && props.Virou === false) ? "flex" : "none"};
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
    display: ${props => props.Virou === true ? "flex" : "none"};
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
