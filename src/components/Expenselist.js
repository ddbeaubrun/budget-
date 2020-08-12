import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Expensetrans from './Expensetrans';


const Expenselist = () => {
    const {expenseTransactions} = useContext(GlobalContext)

    return (
        <div className="transactions transactions-expense">
            <h2>Expense Transaction History</h2>
            <ul className="transaction-list">
            {expenseTransactions.map(expenseTransaction => 
                  <Expensetrans key={expenseTransaction.id}expenseTransaction={expenseTransaction}/>
                    )}
            </ul>
        </div>
    )
}

export default Expenselist;