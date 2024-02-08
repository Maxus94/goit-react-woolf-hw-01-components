import css from './Statistics.module.css';

export const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            style={{
              backgroundColor: `hsl(${percentage}, ${
                100 - percentage
              }%, ${percentage}%)`,
            }}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
