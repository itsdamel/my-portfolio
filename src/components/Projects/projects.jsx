import SectionTitle from "../SectionTitle/sectionTitle"
import ProjectCard from "../projectCard/projectCard";
import style from './projects.module.css';
import { projects } from "../../data/projects";
import { useRef } from "react";

export default function Projects(){
    const carousel= useRef(null)

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
                <p>front-end</p> <span>|</span> <p>back-end</p> <span>|</span><p>full-stack</p> <span>|</span> <p>favoritos</p>
            </nav> 

            <div ref={carousel} id={style.carousel}>
                {projects.map((project) => <ProjectCard key={`tech ${projects.indexOf(project)}`} name={project.name} stack={project.stacks}description={project.description} preview={project.preview}/>)}
                
            </div>
            <div id={style.carouselControll}>
                <button onClick={scrollLeft}><img src='assets/left-arrow.png' alt='scroll left'></img></button>
                <button onClick={scrollRight}><img src='assets/right-arrow.png' alt='scroll right'></img></button>
            </div>
        </section>
    )
}