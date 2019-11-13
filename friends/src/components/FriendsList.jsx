import React, {useState, useEffect} from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";



const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then( response => {
                console.log('friends response', response.data);
                setFriends(response.data)
            })
            .catch(error => {
                console.log("error fetching data", error);
            })
    },[])
    return (
        <div>
            {friends.map(event => {
                return (
                    <div key={event.id}>
                        <h3>{event.name}</h3>
                        <p>Age: {event.age}</p>
                        <p>Email: {event.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList;

