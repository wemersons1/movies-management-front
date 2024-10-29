import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
import Context from "../../../Hook/Context";
import MenuMobile from "./MenuMobile";
import Logo from "../../../Pages/Login/img/logo.png";

import { BiLogOutCircle, BiTransferAlt } from "react-icons/bi";
import {
    MdDashboard,
    MdRule
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUsers, FaUserTie } from "react-icons/fa";

const Sidebar = ({ role }) => {

    const { signOut, user } = useContext(Context);
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    let sidebar = null;

    if (role === "Manager") {
        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/dashboard"}
                    >
                        <MdDashboard className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/clients"}
                    >
                        <FaUsers className={styles.Icon} />
                        Clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/plans"}
                    >
                        <MdRule className={styles.Icon} />
                        Tabelas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/sales"}
                    >
                        <BiTransferAlt className={styles.Icon} />
                        Vendas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/representatives"}
                    >
                        <FaUserTie className={styles.Icon} />

                        Consultores
                    </NavLink>
                </li>
            </ul>
        );
    } else if (role === "Admin") {

        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/dashboard"}
                    >
                        <MdDashboard className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/clients"}
                    >
                        <FaUsers className={styles.Icon} />
                        Clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/plans"}
                    >
                        <MdRule className={styles.Icon} />
                        Tabelas
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/payments"}
                    >
                        <GiPayMoney className={styles.Icon} />
                        Pagamentos
                    </NavLink>
                </li> */}

                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/sales"}
                    >
                        <BiTransferAlt className={styles.Icon} />
                        Vendas
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/employees"}
                    >
                        <FaUserTie className={styles.Icon} />

                        Equipe
                    </NavLink>
                </li>
            </ul>
        );
    } else if (role === "Representative") {

        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/dashboard"}
                    >
                        <MdDashboard className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/clients"}
                    >
                        <FaUsers className={styles.Icon} />
                        Clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/plans"}
                    >
                        <MdRule className={styles.Icon} />
                        Tabelas
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/sales"}
                    >
                        <BiTransferAlt className={styles.Icon} />
                        Vendas
                    </NavLink>
                </li>
            </ul>
        );
    } else if (role === "Partner") {
        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/dashboard"}
                    >
                        <MdDashboard className={styles.Icon} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/clients"}
                    >
                        <FaUsers className={styles.Icon} />
                        Clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/plans"}
                    >
                        <MdRule className={styles.Icon} />
                        Tabelas
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/sales"}
                    >
                        <BiTransferAlt className={styles.Icon} />
                        Vendas
                    </NavLink>
                </li>
            </ul>
        );
    } else if (role === "Backoffice") {
        sidebar = (
            <ul>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/clients"}
                    >
                        <FaUsers className={styles.Icon} />
                        Clientes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/plans"}
                    >
                        <MdRule className={styles.Icon} />
                        Tabelas
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? styles.LinkActive : ""
                        }
                        to={"/employees"}
                    >
                        <FaUserTie className={styles.Icon} />

                        Equipe
                    </NavLink>
                </li>
                <li onClick={signOut}>
                    <a href="#"><BiLogOutCircle className={styles.Icon} />Sair</a>
                </li>
            </ul>
        );
    }

    if (role !== 'seller') {
        return (
            <div>
                <div className={showMenu ? styles.BurgerMenu : styles.BackgroundTransparent}>
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <GiHamburgerMenu style={showMenu ? { fill: "white" } : { fill: "#1E293B" }} size={35} />
                    </button>
                </div>

                <div className={`${styles.Sidebar} ${!showMenu ? styles.HideSidebar : null}`} onClick={() => setShowMenu(false)}>
                    <div >
                        <Link className={styles.Logo} to={'/'}>
                            <img style={{ padding: "2.5rem 2rem 2rem 2rem" }} src={user.company?.imageLogoCode.length > 15 ? user.company.imageLogoCode : Logo} width={"175px"} />
                        </Link>
                    </div>
                    {sidebar}
                </div>

            </div>

        );
    }

    return (
        <MenuMobile />
    );

}

export default Sidebar;
