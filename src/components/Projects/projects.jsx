import SectionTitle from "../SectionTitle/sectionTitle"
import ProjectCard from "../projectCard/projectCard";
import style from './projects.module.css';
import { favorites, frontEnd, backEnd, fullStack} from "../../data/projects";
import { useState, useRef } from "react";

export default function Projects(){
    const carousel= useRef(null)
    
    const [stack, setStack] = useState(favorites)
    
    const showFrontEnd = () =>{
        
        setStack(frontEnd)
    }
    const showBackEnd = () =>{
        
        setStack(backEnd)
    }
    const showFullStack = () =>{
        
        setStack(fullStack)
    }

    const showFavorites = () => {
        
        setStack(favorites)
    }
    const scrollLeft =(e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -=  carousel.current.offsetWidth
    }
    const scrollRight =(e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    
    return(
        <section id={style.projects }>
            <SectionTitle title='projects'/>
            <nav className={style.filter}>
                <input type="radio" name="stack" id='frontend' onClick={showFrontEnd}/>
                <label for="frontend">front-end</label> 

                <span>|</span> 

                <input type="radio"  name='stack'id='backend' onClick={showBackEnd}/>
                <label for="backend">back-end</label> 

                <span>|</span>

                <input type="radio" name="stack" id='fullstack' onClick={showFullStack}/>
                <label for="fullstack">fullstack</label> 

                <span>|</span> 

                <input type="radio" name="stack" id='favorites' onClick={showFavorites}/>
                <label for="favorites">favorites</label> 
            </nav> 

            <div ref={carousel} id={style.carousel}>
                {stack.map((project) => <ProjectCard key={project.id} name={project.name} stack={project.stacks}description={project.description} preview={project.preview}/>)}
                
            </div>
            <div id={style.carouselControll}>
                <button onClick={scrollLeft}><img src='assets/left-arrow.png' alt='scroll left'></img></button>
                <button onClick={scrollRight}><img src='assets/right-arrow.png' alt='scroll right'></img></button>
            </div>
        </section>
    )
}