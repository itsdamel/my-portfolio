import style from './banner.module.css';

export default function Banner(){
    return(
        <section>
            <div className={style.all}>
                <div className={style.content}>
                    <div className={style.presentation}>
                        <h2>Hi there! I'm</h2>
                        <strong>Mel De Melo</strong>,
                        <h2>a <span id={style.myStack}>full stack</span> software engineer</h2>
                    </div>
                    <div className={style.tech}>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JAVASCRIPT</div>
                        <div>PYTHON</div>
                        <div>REACT.js</div>
                        <div>NODE.js</div>
                        <div>MySQL</div>
                    </div>
                </div>
                <div className={style.images}>
                    <img className={style.mel} src='assets/coverMe.png'/>
                    <div className={style.socialMedia}>
                        <img src='assets/linkedin-logo.png' alt='linkedin'/>
                        <img src='assets/github-logo.png'/>
                    </div>
                </div>
            </div>
        </section>
    )
}