import styles from './Hero.module.css';
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

export default function Hero() {
    return(
        <>
            <section className={styles.heroContainer}>
                <div className={styles.heroText}>
                    <span>Olá, eu sou</span>
                    <h1>Mateus Luiz</h1>
                    <p>Desenvolvedor Full Stack</p>
                    
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.btnLinkedin}><GrLinkedin size={24} /></a>
                        <a href="#" className={styles.btnGithub}><GrGithub size={24} /></a>
                    </div>
                </div>

                <div className={styles.heroImage}>
                    <img src="/Image/minhaFoto.png" alt="Minha imagem de perfil" />

                </div>

            </section>
        </>
    )
}