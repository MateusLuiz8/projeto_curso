import { FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>2026 Mateus Luiz. Todos os direitos reservados</p>

            {/*Link do WhtsApp*/}
            <a
                href='https://wa.me/5537998052365'
                target='_blank'
                rel="noopener noreferrer"
                className={styles.btnWhatsApp}
            >
                <FaWhatsapp size={34} color='#ffffff' />
            </a>

        </footer>
    )
}