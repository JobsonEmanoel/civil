import React from 'react'
import axios from 'axios'

import { useHistory } from 'react-router-dom'



import { useForm } from 'react-hook-form'


import './Home2.css'


function Post() {

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
    })

    const addPost = data => axios.post("http://25.70.164.206:8080/pessoas/", data)
    .then(() => {
        console.log("Deu tudo certo")
        history.push("/")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })

    return(
        <div>

            <main>

                <div className="card-post" >

                    <h1>Fómulario</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Nome</label>
                                <input type="text" name="title" {...register("nome")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Senha</label>
                                <input type="text" name="senha" {...register("senha")} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Sexo</label>
                                <textarea type="text" name="genero" {...register("genero")} ></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                                
                                </div>
                                <div className="fields" >
                                <label>Motivo</label>
                                <textarea type="text" name="sexo" {...register("motivo")} ></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                                
                            </div>
                            
                                <div className="fields" >
                                <label>Hora de entrada</label>
                                <input type="datetime-local" name="dateIn" {...register("dateIn")} />
                                <p className="error-message">{errors.content?.message}</p>
                                
                            </div>

                            <div className="btn-post" >
                                <button type="submit" >Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default Post