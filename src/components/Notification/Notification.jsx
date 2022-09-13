import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification() {
  return <p className={s.message}/>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
