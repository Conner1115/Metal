import styles from '../styles/Quote.module.css'
export default function Quote(props){
  return (
    <div className={styles.quote}>
      <p className={styles.qbody}>{"“"}{props.text}{"”"}</p>
      <p className={styles.author}>- {props.author}</p>
    </div>
  );
}