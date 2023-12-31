import style from './skills.module.css';
import { technologies } from '../../data/technologies';
import SectionTitle from '../SectionTitle/sectionTitle';

export default function Skills(){
    
    
    let skillsList = technologies.map((tech) =>{
        return(
            <SkillCard key={`tech ${technologies.indexOf(tech)}`} name={tech.name} imgSrc={tech.imgSrc}/>
        )
    })

    return(
        <section data-aos="fade-left" data-aos-duration="500" id='skills' className={style.skills}>
               
               <SectionTitle title='skills'/>

            
                <div className={style.cardsContainer}>
                
                    {skillsList}

                </div>
               
        </section>
    )
}

function SkillCard({name, imgSrc}){
    return(
        <div data-aos="fade-left" data-aos-duration="700"  className={style.skillCard}>
            <img src={`assets/${imgSrc}`}/>
            <h3>{name}</h3>
        </div>
    )
}