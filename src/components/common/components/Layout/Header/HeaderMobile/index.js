import React, {useContext} from 'react';
import styles from './HeaderMobile.module.css';
import Context from "../../../../Hook/Context";
import {BsArrowLeft, BsCart4} from 'react-icons/bs';
import {useNavigate, useParams} from "react-router-dom";

const HeaderMobile = ({input, showItemCart}) => {

    const {user, role} = useContext(Context);

    const navigate = useNavigate();

    const {id} = useParams();

    return (
        <div>
            {
                role === 'seller' ?
                    <div className={styles.HeaderHidden}>

                    </div> : null
            }

            <header className={styles.Header}>
                <div>
                    {
                        role !== 'seller' ? null :

                            <div id={'search'} className={styles.Search}>

                                <button onClick={() => navigate(-1)} className={styles.Icon}>
                                    <BsArrowLeft size={25} style={{fill: "#4e4e4e"}}/>
                                </button>
                                {input}
                            </div>

                    }

                </div>

                <ul>
                    <li onClick={() => navigate('/me')}>Olá, {user.name.split(' ')[0]}</li>
                </ul>

                {
                    role === 'seller' ?
                        <button style={{backgroundColor: "transparent"}} onClick={() => navigate(id ? '/orders/save/' + id : '/chart-pending')}>
                            <div className={styles.Cart}>


                               {showItemCart ?  <div className={styles.QuantityItems}>1</div> : null}
                                <BsCart4 size={25}/>
                            </div>
                        </button> : null
                }

            </header>
        </div>

    );
}

export default HeaderMobile;
