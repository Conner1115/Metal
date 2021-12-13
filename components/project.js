import styles from '../styles/Project.module.css'
export default function Mark(props){
  return (
    <div className={styles.proj}>
      <img src={props.icon} alt="svg icon" className={styles.icon}/>
      <div className={styles.side}>
        <h2 className="tleft">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}