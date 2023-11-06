import style from './sectionTitle.module.css';

export default function SectionTitle({title}){
    return(
        <div className={style.title}>
            <h2>.{title}</h2>
            <div></div>
        </div>
    )
}