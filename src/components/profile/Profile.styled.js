import styled from "styled-components"; 
export const ProfileItem = styled.div`
background-color: white;
border: 1px solid black;
padding-top: 40px;
border-radius: 10px;
overflow: hidden;
`
export const ProfileDescription = styled.div`
text-align:center;
`
export const ProfilePhoto = styled.img`
display:block;
margin: 0 auto;
width: 200px;
height: 200px;
border-radius: 50%;
overflow: hidden;
border: 1px dashed black;
`


export const UsenName = styled.p`
font-weight: bold;
font-size: 15px;`

export const UserStatus = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
list-style: none;
background-color: #b5b5b5;
`
export const StatusItem = styled.li`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid gray;
span{
    text-align: center;
}
span:last-child{
 font-weight: bold;
 font-size: 15px;   
}
`