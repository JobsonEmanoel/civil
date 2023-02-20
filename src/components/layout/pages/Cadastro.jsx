'use client';
//import { useState } from "react";
import {useForm} from "react-hook-form";
const UserAddForm = () => {
    const{handleSubmit, register} = useForm(); 
    const handleSubmitData = (data) => {
        console.log(data);
    }
    return(
    <>
    <form 
    onSubmit={handleSubmit(handleSubmitData)}
    style={
        {minWidth: '460px',
         display: 'flex',
           gap:'8px',
        marginTop:'16px'
        }
    }
    >
       <input type="text"{...register('name')} placeholder="Nome"/>
       <input type="text"{...register('address')} placeholder="Endereço" />
       <input type="text"{...register('cell')} placeholder="Telefone" />
       <input type="text"{...register('bo')} placeholder="Ocorrência" />

       <button type="submit">Adicionar</button>
    </form>
    </>
    ) 
}

function Cadastro() {
    return(
        <div>
<h2> Formulário </h2>
<UserAddForm  />
        </div>

    )
    
}

export default Cadastro