import { Profile } from "./profile/Profile";
import user from "../data/user.json";
import { GlobalStyle } from "./GlobalStyle.styled";
import { Container } from "./Container.styled";
import { Statistics } from "./statistics/Statistics";
import statistics from "../data/statistics.json";
import friends from "../data/friends.json";
import { ProfileFriends } from "./friend-list/FriendList";
import transactions from "../data/transactions.json";
import { ProfileTransactionHistory } from "./transaction-history/TransactionHistory";

const {username, 
  tag,
  location,
  avatar,
  stats,} = user;
export const App = () => {
  return (
  <Container>
  <GlobalStyle />
  <Profile username={username}
  tag={tag}
  location={location}
  avatar={avatar}
  stats={stats}
    />
    <Statistics stats={statistics}/>
    <ProfileFriends friends={friends}/>
    <ProfileTransactionHistory items={transactions} />
  </Container>
  );
};

