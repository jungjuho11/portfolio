import { useEffect } from "react";
import { useState } from "react";
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc ,doc } from 'firebase/firestore'

const Todo = () => {
    //console.log(process.env);

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users") //getting the collection named 'users' from the firebase database


    const createUser = async() => {
        await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)});
    }

    const updateUser = async(id, currentAge) => {
        const userDoc = doc(db, "users", id); //now the userdoc chooses the user that we want to update
        const newFields = {age: currentAge + 1};
        await updateDoc(userDoc, newFields)

    }

    const deleteUser = async(id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    }

    useEffect(() => {
        const getUsers = async () => {
            //now you're getting all the information within 'users' , to handle the promise that the async returns, you use 'await'
            //getDocs gets the document under the collection
            const data = await getDocs(usersCollectionRef)
            console.log(data);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(users);
        }

        //calling the function getUsers
        getUsers();
    }, [])

    return (
        <>
            <input type="text" placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}/>
            <input type="number" placeholder="Age..." onChange={(event) => {setNewAge(event.target.value)}}/>
            <button onClick={createUser}>Create User</button> {/* there's no arrow function for onClick because 'createUser' does not take in any arguments */}
            {users.map((user) => {
                return (
                    <div>
                        <h1>Name: {user.name}</h1>
                        <h2>Age: {user.age}</h2>
                        <button onClick={() => {updateUser(user.id, user.age)}}>Increase Age</button> {/* because the function 'updateUser' has arguments, we have to make it arrow function */}
                        <button onClick={() => {deleteUser(user.id)}}>Delete User</button>
                    </div>)
            })}
        </>
    );
}

export default Todo;