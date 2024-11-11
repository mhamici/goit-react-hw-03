import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ id, number, name, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <div className={styles.contactContext}>
          <FaUser className={styles.icon} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.contactContext}>
          <FaPhoneAlt className={styles.icon} />
          <a href={`tel:${number}`} className={styles.number}>
            {number}
          </a>
        </div>
      </div>
      <button
        onClick={() => onDelete(id)}
        type="button"
        aria-label="delete button"
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
