import { useState } from "react"
import swal from "sweetalert"
import API from "../../api"

export const Users = () => {


    const [users, setUsers] = useState([])

    const baseUrl = import.meta.env.VITE_API_URL;

    const getAllUsers = async () => {
        try {
            const response = await API.get(`/users`);
            setUsers(response.data);
            console.log(users)
            swal('Success!', 'הנתונים נמשכו בהצלחה', 'success');
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    return <>
        <h3>😀😁😂🤣😃😄😋😊😉😆😅😍😘🥰😗😙🥲😎🤔🤩🤗</h3>
        <button onClick={() => getAllUsers()}>All users</button>
        {
            users && Array.isArray(users) && users.map(user => {
                return <>
                    <p>{`user: ${user.name} , id: ${user.userId}`}</p>
                    <br />
                </>
            })
        }
    </>
}