import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transacation from './Transacation';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                <Transacation key={transaction.id} transaction = {transaction}/>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList
