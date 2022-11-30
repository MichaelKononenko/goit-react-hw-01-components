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
