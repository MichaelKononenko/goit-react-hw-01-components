import PropTypes from 'prop-types';
import {ProfileDescription, ProfileItem, ProfilePhoto, StatusItem, UsenName,  UserStatus } from './Profile.styled';
export const Profile = ({
    username, 
    tag,
    location,
    avatar,
    stats,
}) => {
    const{followers, views, likes} = stats;
    return <ProfileItem>
         <ProfileDescription>
          <ProfilePhoto src={avatar} alt="User avatar" width="100%"/>
            <UsenName>{username}</UsenName>
              <p>@{tag}</p>
              <p>{location}</p>
         </ProfileDescription>
        <UserStatus>
           <StatusItem>
           <span>Followers</span>
            <span>{followers}</span>
           </StatusItem>
           <StatusItem>
            <span>Views</span>
            <span>{views}</span>
            </StatusItem>
            <StatusItem>
            <span>Likes</span>
            <span>{likes}</span>
            </StatusItem>
        </UserStatus>
    </ProfileItem>
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
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