// Hooks
import { useEffect, useState } from "react"

// Firebase
import { db } from "../firebase/config"
import { collection, query, orderBy, onSnapshot} from "firebase/firestore"

export const useFetchContact = (docCollection) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [documents, setDocuments] = useState([])

    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        if(cancelled) return
        const fetchDocuments = async () => {
            setLoading(true)
            try {
                const q = await query(collection(db, docCollection), orderBy('createAt', 'desc'))

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })
            } catch (error) {
                setError('Tivemos um erro ao puxar os contatos')
            }    
            setLoading(false)
        }
        fetchDocuments()
        
    }, [docCollection, cancelled])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {documents, loading, error}

}