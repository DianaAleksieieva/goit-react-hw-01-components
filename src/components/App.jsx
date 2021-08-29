import { SocialProfile } from 'components/SocialProfile/SocialProfile';
import user from '../user.json';
import { Statistics } from 'components/Statistics/Statistics';
import statistics from '../statistical-data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
