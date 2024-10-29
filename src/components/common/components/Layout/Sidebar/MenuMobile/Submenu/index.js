import React from 'react';
import styles from './Submenu.module.css';
import {GrFormClose} from 'react-icons/gr';
import {NavLink} from "react-router-dom";
import {FaUsers} from 'react-icons/fa';
import {GiShoppingCart} from 'react-icons/gi';

const Submenu = ({setShowSubmenu, showSubmenu}) => {

    return (
        <div className={`${styles.Submenu} ${showSubmenu ? styles.ShowSubmenu : styles.HideSubmenu}`}>

            <div className={'d-flex justify-content-between'}>
                <h1>Novo</h1>
                <button onClick={() => setShowSubmenu(false)} onBlur={() => setShowSubmenu(false)}>
                    <GrFormClose size={30}/>
                </button>
            </div>
            <ul onClick={() => setShowSubmenu(false)} >
                <li>
                    <NavLink
                        className={(navData) => (navData.isActive ? styles.LinkActive : "")}
                        to={"/products"}
                    >
                        Venda
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navData) => (navData.isActive ? styles.LinkActive : "")}
                        to={"/clients/create"}
                    >
                        Cliente
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navData) => (navData.isActive ? styles.LinkActive : "")}
                        to={"/advisors/create"}
                    >
                        Assessor
                    </NavLink>
                </li>
            </ul>

        </div>
    );
}

export default Submenu;
