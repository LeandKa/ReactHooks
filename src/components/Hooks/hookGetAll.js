import { useEffect,useState} from 'react'
import axios from 'axios';

  const HookGetAll = (url) => {

    const [tarefas,setTarefas] = useState([]);

    useEffect(()=>{
        axios.get(url).then(res =>{
            setTarefas(res.data)
        })
        .catch(err =>{
            console.log('Nao foi')
        })
       
    },[url])


    return tarefas;
}


export default HookGetAll;