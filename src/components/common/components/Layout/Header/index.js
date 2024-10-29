import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import styles from './Header.module.css';
import Context from "../../../Hook/Context";
import { BsArrowLeft, BsCart4 } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import { FaPencilRuler } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';
import { GiCalculator } from 'react-icons/gi';
import { GrDocumentConfig } from 'react-icons/gr';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';

const Header = () => {

    const today = new Date(new Date().toJSON().slice(0, 10));
    const [showSubMenu, setShowSubMenu] = useState(false);
    const { user, role, signOut, token, setUser } = useContext(Context);
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState({ data: [], quantity: 0 });
    const [getNotification, setGetNotification] = useState(true);

    setTimeout(() => {
        setGetNotification(!getNotification);
    }, 10000);


    useEffect(() => {
        if (role === 'Admin') {

            axios.get('/api/v1/notifications?take=6', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setNotifications(response.data);
            });

        }

    }, [getNotification]);

    const readNotification = id => {

        axios.put('/api/v1/notifications/read/' + id, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            let notificationsTreated = [];

            notifications.data.forEach(item => {
                if (item.id !== id) notificationsTreated.push(item);
            });
            setNotifications({
                data: notificationsTreated,
                quantity: notifications.quantity - 1
            });
        });

    }

    const renderNotifications = () => {

        if (!notifications?.data?.length) {
            return ("");
        }

        return (
            <div className={styles.SubMenu} style={{ position: 'absolute', top: '35px', right: '10px' }}>
                {
                    notifications?.data?.map(item => {

                        let createdAt = item.created_at.split('T');
                        let hour = item.created_at.split('T')[1].slice(0, 8);
                        createdAt = createdAt[0];
                        createdAt = createdAt.split('-');
                        createdAt = `${createdAt[2]}/${createdAt[1]}/${createdAt[0]}`

                        return (
                            <li key={item.id} style={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                                <Link to={`/clients/` + item.id} onClick={() => setShowNotifications(false)}>
                                    <div><span style={{ fontSize: '1rem' }}>{item?.company?.corporate_name}</span>
                                        <span style={{ fontSize: '.85rem', fontWeight: 'normal', marginLeft: '.5rem' }}>
                                            {`${createdAt} ${hour}`}</span>

                                    </div>

                                </Link>
                                <button style={{ backgroundColor: 'transparent' }} onClick={() => readNotification(item.id)}><AiOutlineEye size={15} /></button>
                            </li>
                        )
                    })
                }

            </div>

        );

    }

    return (
        <div>
            <div className={styles.HeaderHidden}>

            </div>
            <header className={`${styles.Header}`}>
                <div>
                    {
                        role !== 'seller' ? null :

                            <div id={'search'} className={styles.Search}>

                                <button style={{ position: 'relative' }} onClick={() => navigate(-1)} className={styles.Icon}>
                                    <BsArrowLeft size={25} style={{ fill: "#4e4e4e" }} />
                                </button>

                            </div>

                    }

                </div>

                <ul>
                    <li onBlur={() => setShowSubMenu(!showSubMenu)} onClick={() => setShowSubMenu(!showSubMenu)}>Olá, {user.name.split(' ')[0]}

                    </li>

                    {
                        showSubMenu &&
                        <div style={!showSubMenu ? { display: "none" } : null} className={styles.SubMenu}>

                            {
                                role === 'Admin' ?
                                    <li onClick={() => setShowSubMenu(false)}>
                                        <Link to={`/config`}>
                                            <GrDocumentConfig size={20} /> Config.
                                        </Link>
                                    </li> : null
                            }

                            {
                                role === 'Admin' ?
                                    <li onClick={() => setShowSubMenu(false)}>
                                        <Link to={`/taxes`}>
                                            <GiCalculator size={20} /> Taxas base parceiro
                                        </Link>
                                    </li> : null
                            }

                            {
                                role === 'Admin' ?
                                    <li onClick={() => setShowSubMenu(false)}>
                                        <Link to={`/taxes-rate`}>
                                            <FaPencilRuler size={20} /> Taxas custos
                                        </Link>
                                    </li> : null
                            }

                            <li onClick={() => {
                                signOut();
                                navigate('/');
                            }}>
                                <BiLogOutCircle size={20} /> Sair
                            </li>
                        </div>
                    }

                </ul>

                {
                    role !== 'Admin' ? null :
                        <div className={styles.NotificationArea} onClick={() => setShowNotifications(!showNotifications)}>
                            {
                                notifications.quantity ? <span className={styles.Notifications}>{notifications.quantity}</span> : null
                            }

                            <BiUserCircle className={styles.NotificationIcon} size={30} />
                        </div>
                }
                <div style={!showNotifications ? { display: "none", position: 'relative' } : null} >

                    {renderNotifications()}

                </div>

            </header>
        </div>

    );
}

export default Header;
