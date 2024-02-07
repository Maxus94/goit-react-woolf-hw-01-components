import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";
import user from "../user.json";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user}/>
      <Statistics/>
      <FriendList/>
      <TransactionHistory/>
    </div>
  );
};