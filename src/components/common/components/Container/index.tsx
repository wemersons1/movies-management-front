import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode,
    size: string;
}

const Container = ({children, size}: ContainerProps) => {

    return (
        <div className={size ? styles[size]: styles.Container}>
            {children}
        </div>
    );
}

export default Container;
