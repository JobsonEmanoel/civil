import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import "./Deletar.css"
import "./Home.css"


class Deletar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            civil: []
          
        
        }
    }
componentDidMount(){
    
  this.buscarcivil();
 }

componentWillUnmount(){

}

buscarcivil = () => {
  fetch('http://25.70.164.206:8080/pessoas/')
  .then(response => response.json())
  .then(dados =>{
    this.setState({civil : dados})
  })
}
deletarcivil = (id) => {
  fetch(`http://25.70.164.206:8080/pessoas/${id}`,{method:'DELETE', headers : {'Content-Type' : 'application/json'},})
  .then(response =>{
    if(response.ok){
      this.buscarcivil();

    }})
  }
  
    render(){
       
      return(
        <div>
        <Table className=''>
        <thead>
        <tr>
        <th>Codigo</th>
        <th>Nome</th>
        <th>Senha</th>
        <th>Genero</th>
        <th>Motivo</th>
        <th>Hora de Entrada</th>
        <th>Hora de saida</th>
        
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
               <td><Button className='btn-post' onClick={() => this.deletarcivil(civil.codigo)}>Excluir</Button></td>
               </tr>
            )
            }
       
        </tbody>
    </Table>
    </div>
    );
    }     
};
 
export default Deletar;