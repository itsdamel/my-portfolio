import styles from './header.module.css';

export default function Header(){
    return(
        <header >
            <div>
                <p className={styles.logo}>.<strong>MDM</strong></p>
            </div>
            
            <nav>
                <a href='#text'>.about</a>
                <a href='#skills'>.skills</a>
                <a href='#projects'>.projects</a>
                <a href='#contact'>.contact me</a>
            </nav>
            
        </header>
    )
}