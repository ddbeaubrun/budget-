import React from 'react'
import Header from './components/Header';
import Balance from './components/Balance';
import Addtrans from './components/Addtrans';
import Incomelist from './components/Incomelist';
import Expenselist from './components/Expenselist';
import {GlobalContextProvider} from './context/GlobalState';
import './App.css';

const App = () => {
    return (
    <GlobalContextProvider>
        <div className="container">
            <div className="app-wrapper">
             <Header/>
             <Balance/>
             <Addtrans/>
             <Incomelist/>
             <Expenselist/>
            </div>
        </div>
    </GlobalContextProvider>
    )
}

export default App
