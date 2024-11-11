import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onChange }) => (
  <div className={styles.searchBox}>
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} className={styles.input} />
    </label>
  </div>
);

export default SearchBox;
