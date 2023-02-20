import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home1 from "./components/layout/pages/Home1";
import Home2 from "./components/layout/pages/Home2"
import Cadastro from "./components/layout/pages/Cadastro";
import Alteração from "./components/layout/pages/Alteração";
import Container  from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Deletar from './components/layout/pages/Deletar';
import Listar from "./components/layout/pages/Listar";
import Tempo from './components/layout/pages/Tempo'
import Listar2 from './components/layout/pages/Listar2';


function App() {
  return (
            <Router>
           <Navbar />
           <Switch>
            <Container customClass='min-height'>
 
            <Route exact path="/Alteração">
             <Alteração/>
             </Route>
             <Route exact path="/Tempo">
             <Tempo/>
             </Route>
             <Route exact path="/">
             <Home1/>
             </Route>
             <Route exact path="/Fórmulario">
             <Home2/>
             </Route>
             <Route exact path="/Chamadas">
             <Listar/>
             </Route>

           
             <Route exact path="/Deletar">
              <Deletar/>
              </Route>
             <Route exact path="/Cadastro">
               <Cadastro/>
               </Route>  
               <Route exact path="/Listar2">
               <Listar2/>
               </Route>          
                </Container>
              </Switch>
              
                <Footer />
                </Router>
             
)
};

export default App;
