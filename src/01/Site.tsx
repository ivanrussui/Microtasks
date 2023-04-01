import React from 'react';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const Site = () => {
    return (
        <>
            <Header title={'New Header'} />
            <Body titleForBody={'New Body'} />
            <Footer titleForFooter={'New Footer'} />
        </>
    );
}