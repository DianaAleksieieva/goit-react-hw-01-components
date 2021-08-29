import css from './FriendList.module.css';
import PropTypes, { bool } from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      {' '}
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li className={css.friendListItem} key={friend.id}>
            <img className={css.avatar} src={friend.avatar} alt={friend.name} />
            <p className={css.name}>{friend.name}</p>
            <p className={css.isOnline}>
              {friend.isOnline ? (
                <div className={css.true}></div>
              ) : (
                <div className={css.false}></div>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
PropTypes.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: bool.isRequired,
    }),
  ),
};
