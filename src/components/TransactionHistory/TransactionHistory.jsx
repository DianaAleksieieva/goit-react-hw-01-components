import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
  return (
    <div className={css.container}>
      {' '}
      <table className={css.transactionHistory}>
        <thead className={css.head}>
          <tr>
            <th className={css.column}>Type</th>
            <th className={css.column}>Amount</th>
            <th className={css.column}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.body}>
          {items.map(transaction => (
            <tr className={css.trow} key={transaction.id}>
              <th className={css.tcolumn}>{transaction.type}</th>
              <th className={css.tcolumn}>{transaction.amount}</th>
              <th className={css.tcolumn}>{transaction.currency}</th>
            </tr>
          ))}
        </tbody>
      </table>{' '}
    </div>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
