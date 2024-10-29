import React, {useState} from 'react';
import styles from "./MenuMobile.module.css";
import {NavLink} from "react-router-dom";
import { FaUsers} from "react-icons/fa";
import {RiDashboardFill} from 'react-icons/ri';
import {VscOrganization} from 'react-icons/vsc';
import {GiShoppingCart} from "react-icons/gi";
import {IoIosAddCircleOutline} from 'react-icons/io';
import Submenu from "./Submenu";

const MenuMobile = () => {

    const [showSubmenu, setShowSubmenu] = useState(false);

    return (
        <div className={styles.MenuMobile}>
            <ul>
                <li>
                    <NavLink
                        className={(navData) => (navData.isActive ? styles.LinkActive : styles.LikNotActive)}
                        to={"/dashboard"}
                    >
                        <RiDashboardFill className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) => (navData.isActive ? styles.LinkActive : styles.LikNotActive)}
                        to={"/clients"}
                    >
                        <FaUsers className={styles.Icon} />
                        Clientes
                    </NavLink>
                </li>
                <li>
                    <button type={'button'} onClick={() => setShowSubmenu(!showSubmenu)}>
                        <IoIosAddCircleOutline style={{fill: "white"}} size={75} />
                    </button>
                </li>
                <li>
                    <NavLink
                        className={(navData) => (navData.isActive ? styles.LinkActive : styles.LikNotActive)}
                        to={"/advisors"}
                    >
                        <VscOrganization className={styles.Icon} />
                        Assessores
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) => (navData.isActive ? styles.LinkActive : styles.LikNotActive)}
                        to={"/orders"}
                    >
                        <GiShoppingCart className={styles.Icon} />
                        Vendas
                    </NavLink>
                </li>
            </ul>

            <Submenu
                showSubmenu={showSubmenu}
                setShowSubmenu={setShowSubmenu}
            />

        </div>
    );
}

export default MenuMobile;
