import PropTypes from 'prop-types';
import { ProfileNameStyle } from './Profile.styled';
export const Profile = ({
    username, 
    tag,
    location,
    avatar,
    stats,
}) => {
    const{followers, views, likes} = stats;
    return <div>
        <div>
            <img src={avatar} alt="User avatar"/>
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>
        <ul>
            <li>
            <span>Followers</span>
            <span>{followers}</span>
            </li>
            <li>
            <span>Views</span>
            <span>{views}</span>
            </li>
            <li>
            <span>Likes</span>
            <span>{likes}</span>
            </li>
        </ul>
    </div>
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
}


/*
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
*/