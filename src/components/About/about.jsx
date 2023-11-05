import { useState } from 'react';
import SectionTitle from '../SectionTitle/sectionTitle';

import style from './about.module.css';

export default function About(){
    const [showMore, setShowMore] = useState(false);
    const moreContent = "People say I'm a nice person to be around. I love Lego, board games, and watching volleyball. If that's not a crazy enough mixture for you, I also enjoy renewing old furniture!"

    const handleShowMore = () => setShowMore(!showMore);

    return(
        <section id='about' className={style.aboutSection}>

            <a href='#text'><img id={style.arrowDown} src='assets/arrow-down.svg' alt="go to about me"/></a>
            <div  className={style.dotsWrapper}>
            <div className={style.dotsContainer}>
                    <div className={style.trigger}>
                        <div className={style.interactiveDot}></div>
                    </div>
                    <div className={style.trigger}>
                        <div className={style.interactiveDot}></div>
                    </div>
                    <div className={style.trigger}>
                        <div className={style.interactiveDot}></div>
                    </div>
                </div>
            </div>
            <div id='text' data-aos="fade-left" data-aos-duration="700" className={style.textContent}>
                    <SectionTitle title='about'/>
                    <div id={style.aboutp}>
                        <p>I’m a enthusiastic long-life student <span>passionate about problem solving</span>. Whenever I think about a new idea, planning how to translate it into code is my second favorite part, the first one is coding it! </p>
                        <p>Therefore, I’m <span>currently pursuing a bachelor's degree in software engineering</span>. For the past two years, I’ve been dedicating every single day of the week to learn how to write code that not only works, but that also optimizes my applications and give users an excellent experience.</p>
                        <p id={style.personal}>Outside of work...{showMore&&moreContent}{<img onClick={handleShowMore} id={showMore?style.readLess:style.readMore} src='assets/left-arrow.png' alt={showMore?'read less':'read more'}/>}</p>
                    </div>
            </div>

            <div id={style.linkToCV}> <a href='#'>My CV</a></div>

            <div  id={style.rightWrapper} className={style.dotsWrapper}>
                <div className={style.dotsContainer}>
                    <div className={style.trigger}>
                        <div className={style.interactiveDot}></div>
                    </div>
                    <div className={style.trigger}>
                        <div className={style.interactiveDot}></div>
                    </div>
                    <div className={style.trigger}>
                        <div className={style.interactiveDot}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}