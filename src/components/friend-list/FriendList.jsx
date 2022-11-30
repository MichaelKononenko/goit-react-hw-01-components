import PropTypes from 'prop-types';
import { backgroundColor } from "styled-system"
import { FriendList, FriendListItem, FriendStatus, FriendPhoto, FriendName } from "./FriendList.styled"

export const ProfileFriends = ({friends}) => {
    return <FriendList>
        {friends.map(friend => {return <FriendListItem>
            {friend.isOnline ? <FriendStatus style={{backgroundColor: "green"}}/>
            : <FriendStatus style={{backgroundColor: "red"}}/>}
            <FriendPhoto src={friend.avatar}/>
            <FriendName>{friend.name}</FriendName>
        </FriendListItem>})}
    </FriendList>
}

ProfileFriends.propTypes = {
    friend: PropTypes.array.isRequired,
}