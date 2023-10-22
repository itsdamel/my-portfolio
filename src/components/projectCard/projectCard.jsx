import style from './projectCard.module.css';

export default function ProjectCard( {name, stack, description, preview} ){
    //PropValidation
    let techList = stack.map((tech) => <Tech techName={tech}/>)
    return(
        <div className={style.card}>

            <div className={style.firstSlide}>

                <div style={{backgroundImage:`Url(${preview})` }} className={style.cover}>

                </div>

            </div>

            <div className={style.secondSlide}>

                <div className={style.content}>
                    <h4>{name}</h4>
                    <div className={style.tech}> 

                        {techList}

                    </div>


                    <p>{description}</p>
                    <div className={style.buttonsDiv}>
                        <button><img src='assets/live.png'></img><a href=" #">See live</a></button>
                        <button><img src='assets/cardGithub.png'></img><a href=" #" target='_blank'>GitHub</a></button>
                    </div>
                    

                </div>

            </div>

        </div>
    )
    

        
}

function Tech({techName}){
    return(
        <span>{techName}</span>
    )
}