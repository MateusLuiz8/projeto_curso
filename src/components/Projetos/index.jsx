import styles from './Projetos.module.css';

export default function Projetos() {
    return (
       <section id='projects' className={styles.projetosContainer}>
            <h2 data-aos="fade-right">Meus projetos</h2>
            <div className={styles.projetosContent}>
                <p data-aos="fade-up">EM BREVE...</p>
                <span>Novos projetos estão sendo desenvolvidos</span>
            </div>
       </section> 

    );
}
