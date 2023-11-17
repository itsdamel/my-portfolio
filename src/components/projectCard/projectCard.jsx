import style from './projectCard.module.css';

export default function ProjectCard({ project }){
    
    let techList = project.stacks.map((tech) => <Tech techName={tech}/>)
    return(
        <div data-aos="fade-down" data-aos-once="false" data-aos-duration="700" className={ `${style.card} ${!project.finished && style.soon}`}>

            <div className={style.firstSlide}>

                <div style={{backgroundImage:`Url(${project.preview})` }} className={style.cover}>

                </div>

            </div>

            <div className={style.secondSlide}>

                <div className={style.content}>
                    <h4>{project.name}</h4>
                    <div className={style.techDiv}> 

                        {techList}

                    </div>


                    <p>{project.description}</p>
                    { 
                        project.finished ? (
                            <div className={style.buttonsDiv}>
                                <a href={project.live} target='_blank'>

                                    <button>
                                        <img src='assets/live.png' alt=''></img>See live
                                    </button>
                                </a>

                                <a href={project.repository} target='_blank' >
                                    <button>
                                        <img src='assets/cardGithub.png' alt=''></img>GitHub
                                    </button>
                                </a>
                            </div>
                        ) : (
                            <span className={style.warning}>COMING SOON</span>
                        )
                    }
                </div>

            </div>

        </div>
    )
    

        
}

function Tech({techName}){
    return(
        <span className={style.tech}>{techName}</span>
    )
}