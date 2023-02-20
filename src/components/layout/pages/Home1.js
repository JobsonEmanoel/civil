import React from 'react'
import Table from 'react-bootstrap/Table';
import './Home.css';


class Civil extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            civil: []
        
        }
    }
componentDidMount(){
    fetch('http://25.70.164.206:8080/pessoas/')
    .then(Response => Response.json())
    .then(dados => this.setState({civil : dados})
    )
}
componentWillUnmount(){

}
buscarcivil = () => {
    fetch('http://25.70.164.206:8080/pessoas/')
    .then(resposta => resposta.json())
    .then(dados =>{
      this.setState({civil : dados})
    
    })}


    

    render(){
       
        return(
            <div>
            <Table>
            <thead>
            <tr>
            <th >Codigo</th>
            <th>Nome</th>
            <th>Senha</th>
            <th>Genero</th>
            <th>Motivo</th>
            <th>Hora de Entrada</th>
            <th> Hora de saida</th>
            
             </tr>
           
            </thead>
            <tbody>
                
            {
                this.state.civil.map((civil) => 
                 <tr key={civil.id}>
                   <td>{civil.codigo}</td>
                   <td>{civil.nome}</td>
                   <td>{civil.senha}</td>
                   <td>{civil.genero}</td>
                   <td>{civil.motivo}</td>
                   <td>{civil.prioridade}</td>
                   <td>{civil.atendido}</td>
                   <td>{civil.dateIn}</td>
                   <td>{civil.dateOut}</td>
                   </tr>
                )
                }
           
            </tbody>
        </Table>
        </div>
        )
        }     
};
 
export default Civil;