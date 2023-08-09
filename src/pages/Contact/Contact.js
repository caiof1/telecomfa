// CSS
import { useFetchContact } from '../../hooks/useFetchContact'
import styles from './Contact.module.css'

const Contact = () => {

  const {documents} = useFetchContact('clients')

  console.log(documents)

  return (
    <div className={styles.contact}>
      {documents && documents.map((doc) => (
        <div className={styles.container_contact}>
          <p>{doc.name}</p>
          <p>{doc.numberPhone}</p>
          <p>{doc.cep}</p>
          <p>{doc.endereco}</p>
          <p>{doc.city}</p>
          <p>{doc.numberResidencia}</p>
        </div>
      ))}
    </div>
  )
}

export default Contact