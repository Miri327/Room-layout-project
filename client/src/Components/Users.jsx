import { useState } from "react"
import swal from 'sweetAlert'

export const Users = () => {


    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        setUsers( await API.get(`http://localhost:3001/users`))
        // setUsers([
        //     {name:'aa' , userId:'11'},
        //     {name:'bb' , userId:'22'},
        //     {name:'cc' , userId:'33'},
        //     {name:'dd' , userId:'44'},
        // ])
        swal('Success!', '💖💖💖💖💖💖💖💖', 'success');
    }


    return <>
        <h3>😀😁😂🤣😃😄😋😊😉😆😅😍😘🥰😗😙🥲😎🤔🤩🤗</h3>
        <button onClick={() => getAllUsers()}>All users</button>
        {
            users.map(user => {
                return <>
                    <p>{`user: ${user.name} , id: ${user.userId}`}</p>
                    <br />
                </>
            })
        }
    </>
}