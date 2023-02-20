import axios from 'axios';
import React from 'react'

import  "./Listar.css"
import {useState, useEffect} from "react"
import io from 'socket.io-client'

const socket = io ('http://localhost:3000')
socket.on('connect',() => console.log('[IO] connect'))


 function Buscarcivil () {
  const[next, setNext] = useState([]);

  const getNext = async () => {
    try {
      const resposta = await axios.get ("http://25.70.164.206:3000/pessoas/next");
      const data = resposta.data;
      setNext(data);
      console.log(data)


    } catch(error){
      console.log(error)

    }
    
  };
  useEffect(() => {
  
    getNext()
    console.log(getNext)

    
  },[])


  
  return (
    <div key={next.id}>
      <p className='post'>
        Nome: {next.nome}
        </p>
        <p className='post2'>
        Senha: {next.senha}
      </p>
    
      
    </div>
    
  )
        
  };
  export default Buscarcivil;