import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import Incometrans from './Incometrans'

const Incomelist = () => {
    const {incomeTransactions} = useContext(GlobalContext)

    console.log(incomeTransactions)

    return (
        <div className="transactions transactions-income">
            <h2>Income Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransactions.map(incomeTransaction => 
                  <Incometrans key={incomeTransaction.id}incomeTransaction={incomeTransaction}/>
                    )}
            </ul>
        </div>
    )
}

export default Incomelist;
