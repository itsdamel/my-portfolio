import useWindowSize from '../../hooks/useWindowSize';
import style from './banner.module.css';
import { Typewriter} from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

export default function Banner(){

    let screenWidth = useWindowSize()

   const [smallScreen, setSmallScreen] = useState(null)
   
   useEffect(()=>{
        const handleSmallScreen = () =>{
             if(screenWidth <= 420){
            setSmallScreen(true)
            }else{
                setSmallScreen(false)
            }
        }
        handleSmallScreen()
    }, [screenWidth])
   
    return(
        <section className={style.banner}>
            <div className={style.all}>
                <div className={style.content}>
                    <div className={style.presentation}>
                        <h2>Hi there! I'm</h2>
                        <strong>
                            <Typewriter words={['Mel De Melo']}
                                loop={1}
                                cursor
                                cursorStyle='|'
                                typeSpeed={150}
                                deleteSpeed={50}
                                delaySpeed={1000}/>
                        </strong>,
                        <h2>a <span id={style.myStack}><Typewriter words={['front-e', 'back-e', 'full-stack']}
                loop={1} deleteSpeed={50} delaySpeed={30}/></span> software engineer</h2>
                    </div>
                    <div className={style.tech}>
                        <div data-aos="fade-right">REACT.js</div>
                        <div data-aos="fade-right">NODE.js</div>
                        <div data-aos="fade-right">HTML</div>
                        <div data-aos="fade-right">CSS</div>
                        <div data-aos="fade-right">JAVASCRIPT</div>
                        <div data-aos="fade-right">PYTHON</div>
                        <div data-aos="fade-right">MySQL</div>
                    </div>
                    {smallScreen&&<SocialMedia/>}
                    
                </div>
                <div className={style.images}>
                    <img className={style.mel}  alt='ilustration' src='assets/coverMe.png'/>
                    {!smallScreen&&<SocialMedia />}
                </div>
            </div>
        </section>
    )
}

function SocialMedia(){
    return(
        <div className={style.socialMedia}>
            <a data-aos="fade-up-left" ata-aos-duration="2000" href='https://www.linkedin.com/in/mel-de-melo-2a7824269/' target='_blank' rel='external'><img src='assets/linkedin-logo.png' alt='linkedin'/></a>

            <a data-aos="fade-up-left" ata-aos-duration="700" href="https://github.com/itsdamel" target='_blank' rel='external'><img src='assets/github-logo.png'/></a>
    </div>
    )
}