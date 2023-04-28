import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_imagem.jpg'

export default function Banner() {
    return (
        <div  className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Carlos Alcides, aluno de Front-end na Alura. Aqui compartilho o que estou aprendendo, espero aprender cada dia mais e me tornar um desenvolvedor Full Stack!

                </p>

            </div>

            <div className={styles.imagens}>
                <img  className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Carlos'
                />

            </div>

        </div>
    )
}