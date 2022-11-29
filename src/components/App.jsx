import { Profile } from "./profile/Profile";
import user from "../data/user.json";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Container";

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
    </Container>
  );
};
