import PropTypes from 'prop-types';
import { TransactionHistory, TransactionTableHead } from './TransactionHistory.styled';

export const ProfileTransactionHistory = ({items}) => {
    return <TransactionHistory>
      <TransactionTableHead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
      </TransactionTableHead>
      <tbody>
        {items.map(transaction => {
            const {type, amount, currency } = transaction;
            return <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
        })}
        </tbody>
    </TransactionHistory>
}

ProfileTransactionHistory.prototype = {
    items: PropTypes.array.isRequired
}