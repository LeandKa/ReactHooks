import { useEffect,useState} from 'react'
import axios from 'axios';

const HookDelete = (urlId) =>{
    
    const [id,setId]= useState(0);

        setId(urlId);
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res =>{
            console.log('Deletou');
        }).catch(err =>{
            console.log('Nao deletou');
        })
}



export default HookDelete