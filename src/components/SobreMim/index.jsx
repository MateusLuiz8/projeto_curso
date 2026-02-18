import styles from './Sobre.module.css';

export function SobreMim() {
    return (
        <>
            <section className={styles.sobreContainer}>
                <div className={styles.sobreContent}>
                    {/*Lado esquerdo*/}
                    <h2>Sobre mim</h2>
                    <p>Sou um desenvolvedor apaixonado por criar interfaces modernas e funcionais. Comecei minha jornada na tecnologia 
                    no ano de 2019, na faculdade de Ciência da Computação, e, desde então, venho aprimorando minhas habilidades em 
                    diversas linguagens de programação e frameworks.</p>
                    <p>Meu foco é resolver problemas reais através do código.</p>
                </div>

            </section>
        </>
    )
}