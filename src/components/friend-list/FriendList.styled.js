import styled from "styled-components";

export const FriendList = styled.ul`
width: 300px;
margin: 0 auto 50px;
`
export const FriendListItem = styled.li`
display:flex;
border: 1px solid black;
padding: 10px;
border-radius: 10px;
:not(:last-child){
    margin-bottom: 10px;
}
`
export const FriendStatus = styled.span`
display: block;
width:20px;
height:20px;
border-radius:50%;
overflow:hidden;
align-self:center;
margin-right: 10px;
`
export const FriendPhoto = styled.img`
width: 100px;
height: 100px;
`
export const FriendName = styled.p`
align-self: center;
`