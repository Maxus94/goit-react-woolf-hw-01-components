import css from './Transactions.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody style={{ color: '#777' }}>
        {transactions.map(({ id, type, amount, currency }, idx) => (
          <tr
            className={css.tableRow}
            // style={
            //   idx % 2
            //     ? { backgroundColor: '#EEE' }
            //     : { backgroundColor: '#DDD' }
            // }
            key={id}
          >
            <td
              style={{
                textAlign: 'left',
                paddingLeft: '70px',
                textTransform: 'uppercase',
              }}
            >
              {type}
            </td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
