import React, {useState, useEffect} from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";



const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [add, setAdd] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    })

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

    const handleChange = event => {
        setAdd({...add, [event.target.name]:event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        axiosWithAuth()
        .post(`http://localhost:5000/api/friends`, add)
        .then( response => {
            console.log('response after adding friend', response.data);
        })

}
    // on change - done 
    // on submit
    // value - done 
    return (
        <div>
            <div>
                <form onSubmit={submitForm}>
                    <input
                    type="text"
                    name="name"
                    placeholder="enter friend name"
                    value={add.name}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    name="age"
                    placeholder="enter friend age"
                    value={add.age}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    name="email"
                    placeholder="enter friend email"
                    value={add.email}
                    onChange={handleChange}
                    />
                    <button type="submit">Add Friend</button>
                </form>
            </div>
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
        </div>
    )
}

export default FriendsList;

