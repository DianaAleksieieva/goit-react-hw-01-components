import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ statistics, title }) => {
  return (
    <div className={css.container}>
      <section className={css.statistics}>
        <h2 className={css.title} text="Upload stats">
          {title}
        </h2>

        <ul className={css.statList}>
          {statistics.map(statistics => (
            <li
              className={`${css.item} ${css[statistics.id]}`}
              key={statistics.id}
            >
              <span className={css.label}> {statistics.label}</span>
              <span className={css.percentage}> {statistics.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
