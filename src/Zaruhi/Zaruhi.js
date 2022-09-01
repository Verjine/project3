import { useState } from "react"
import "./Zaruhi.css"

const initialValues = {
    userName: '',
    userSurname: '',
    userSalary: '',
}

function App() {
    const [userData, setUserData] =  useState(initialValues);
    const [users, setUsers] = useState([])
    const handleSubmitUser = (e) => {
        e.preventDefault();
        setUsers((prevState) => [...prevState, userData])
        setUserData(initialValues)
    }
    return (
        <div className="wrapper">
            <div className="wrapper-content">
                <div className="table-data">
                    <table className="tablestyle">
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Surname</th>
                        <th>User Salary</th>
                        <th>Actions</th>
                        <tbody>
                           {users.map((user, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.userName}</td>
                                <td>{user.userSurname}</td>
                                <td>{user.userSalary}</td>
                                <td>
                                    <div>
                                        <button className="edit-action">edit</button>
                                        <button className="remove-action">remove</button>
                                    </div>
                                </td>
                                
                            </tr>
                           ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <form className="inputstyle" onSubmit={handleSubmitUser}>
                        <input placeholder="Write your name" onChange={(e) => setUserData((prevState)=> ({
                            ...prevState,
                            userName: e.target.value
                        }))}
                        value={userData.userName}
                        />
                        <input placeholder="Write your surname" onChange={(e) => setUserData((prevState)=> ({
                            ...prevState,
                            userSurname: e.target.value
                        }))}
                        value={userData.userSurname}
                        />
                        <input placeholder="Write your salary" onChange={(e) => setUserData((prevState)=> ({
                            ...prevState,
                            userSalary: e.target.value
                        }))}
                        value={userData.userSalary}
                        />
                        <div className="buttons-wrapper">
                            <button type="reset">Clean</button>
                            <button tape="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App