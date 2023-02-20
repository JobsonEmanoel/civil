import React from "react";
import { Link } from "react-router-dom";
import Container  from "./Container";
import styles from "./Navbar.module.css"
import Logo from "../../img/civil1.png"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={Logo} height="120" width="245" alt="logo"/>
                </Link>
                <ul className={styles.list}>
                <li className={styles.item}>
                <Link to="/">Tabela</Link>
                </li>
                <li className={styles.item}>
                <Link to="/Listar2">Listar2</Link>
                </li>
                <li className={styles.item}>
                <Link to="/Tempo">Tempo</Link>
                </li>
                <li className={styles.item}>
                <Link to="/Fórmulario">Fórmulario</Link>
                </li>
                <li className={styles.item}>
                <Link to="/Chamadas">Chamadas</Link>
                </li>
                 
                
                <li className={styles.item}>
                <Link to="/Deletar">Deletar</Link>
                </li>
                
                
                </ul>

            </Container>
        </nav>
    )
    
};
export default Navbar;