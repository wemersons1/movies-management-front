import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
    className?: string;
    onFocus?: React.FocusEventHandler<HTMLButtonElement>; 
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement>; 
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode | string;
}

const Button = (props: ButtonProps) => {

    return (
        <div className={styles.Button}>
            <button
                disabled={props.disabled}
                onClick={props.onClick}
                type={props.type ?? 'submit'}
                onMouseDown={props.onMouseDown}
                onMouseUp={props.onMouseUp}
                className={props.className}
            >
                {props.children}
            </button>
        </div>
    );
}

export default Button;
