import styles from './Hero.module.css';
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

export default function Hero() {
    return(
        <>
            <section id='home' className={styles.heroContainer}>
                <div className={styles.heroText} data-aos="fade-right">
                    <span>Olá, eu sou</span>
                    <h1>Mateus Luiz</h1>
                    <p>Desenvolvedor Full Stack</p>
                    
                    <div className={styles.socialLinks} data-aos="fade-up">
                        <a 
                        href="https://www.linkedin.com/in/mateus-luiz-oliveira-26277a200/" 
                        className={styles.btnLinkedin}
                        target='_blank'
                        ><GrLinkedin size={24} /></a>
                        <a 
                        href="https://github.com/MateusLuiz8" 
                        className={styles.btnGithub}
                        target='_blank'
                        ><GrGithub size={24} /></a>
                    </div>
                </div>

                <div className={styles.heroImage} data-aos="flip-up">
                    <img src="/Image/minhaFoto.png" alt="Minha imagem de perfil" />

                </div>

            </section>
        </>
    )
}