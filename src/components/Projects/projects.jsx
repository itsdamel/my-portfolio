import SectionTitle from "../SectionTitle/sectionTitle"
import ProjectCard from "../projectCard/projectCard";
import style from './projects.module.css';
import { projects, favorites, frontEnd, backEnd, fullStack} from "../../data/projects";
import { useState, useRef } from "react";

export default function Projects(){
    const carousel= useRef(null)
    
    const [stack, setStack] = useState(projects)
    const handleStack = (e) => {
        let selected = e.target.id

        switch(selected){
            case 'frontEnd':
                    setStack(frontEnd);
                break;
            case 'backEnd':
                    setStack(backEnd);
                break;
            case 'fullStack':
                    setStack(fullStack);
                break;
            case 'favorites':
                setStack(favorites)
            break;
        }
       
        
    }
   
    const scrollLeft = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -=  carousel.current.offsetWidth
    }
    const scrollRight = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    
    return(
        <section id='projects' className={style.projects}>
            <SectionTitle title='projects'/>
            <nav className={style.filter}>
                <input type="radio" name="stack" id='frontEnd' onClick={handleStack} />
                <label for='frontEnd' >front-end</label> 

                <span>|</span> 

                <input type="radio"  name='stack' id='backEnd'  onClick={handleStack}/>
                <label for="backEnd">back-end</label> 

                <span>|</span>

                <input type="radio" name="stack" id='fullStack' onClick={handleStack}/>
                <label for="fullStack">fullstack</label> 

                <span>|</span> 

                <input type="radio" name="stack" id='favorites' onClick={handleStack}/>
                <label for="favorites">favorites</label> 
            </nav> 

            <div data-aos="fade-down" data-aos-once="false" ref={carousel} id={style.carousel}>
                {stack.map((project) => <ProjectCard key={project.id} project={project}/>)}
                
            </div>
            <div id={style.carouselControll}>
                <button onClick={scrollLeft}>
                    <div id={style.leftArrow } ></div>
                </button>
                <button onClick={scrollRight}>
                    <div id={style.rightArrow}></div>
                    
                </button>
            </div>
        </section>
    )
}