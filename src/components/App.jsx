import { Profile } from "./profile/Profile";
import user from "../data/user.json";
import { GlobalStyle } from "./GlobalStyle";

const {username, 
  tag,
  location,
  avatar,
  stats,} = user;
export const App = () => {
  return (
    <div>
  <Profile username={username}
  tag={tag}
  location={location}
  avatar={avatar}
  stats={stats}
    />
    <GlobalStyle />
    </div>
  );
};
