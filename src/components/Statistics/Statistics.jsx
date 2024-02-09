import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title&&<h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
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
