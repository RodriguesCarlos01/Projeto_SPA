import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.jpeg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.sbtitulo}>
                Ola eu sou o Carlos Alcides!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="foto do Carlos sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Olá tudo bem? Eu sou Aluno em formação Front-End na Alura e estou muito animado com o que estou aprendendo aqui. 
            </p>
            <p className={styles.paragrafo}>
                Sempre gostei de tudo relacionado a computadores e como tudo funcionava dentro de um programa, mas nem fazia idéia de como eles eram criados, hoje estou tendo a oportunidade de descobrir como eles funcionam e a cada dia fico mais feliz em aprender e a solucionar problemas. Estou aprendendo lógica de programação, HTML, CSS e React e prentendo me aprofundar ainda mais em cada uma delas e outras também, e a trabalhar em uma grande empresa como programador.  
            </p>
            <p className={styles.paragrafo}>
                Ainda não tenho curso superior, mas pretendo começar um curso em breve pois sei que é necessario termos uma boa formação academica para prosperar em qualquer Área.
            </p>
            <p className={styles.paragrafo}>
                E foi trabalhando na Área de segurança que conheci o Agelo um amigo que já estudava programação e me icentivou a estudar também, e assim comecei e não pretendo parar tão cedo porque encontrei um caminho que gosto de caminhar e tirar as pedras dele para  que outras pessoas possam caminhar com mais facilidade.
            </p>

        </PostModelo>
    )
}