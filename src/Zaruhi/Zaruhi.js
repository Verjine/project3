import "./Zaruhi.css"

function App() {
    return (
        <div>
            <div>
                <div>
                    <table>
                        <th></th>
                        <th>User Name</th>
                        <th>User Surname</th>
                        <th>User Salary</th>
                        <th>Actions</th>
                        <tbody>

                        </tbody>
                    </table>
                </div>
                <div>
                    <form>
                        <input placeholder="Write your name"/>
                        <input placeholder="Write your surname"/>
                        <input placeholder="Write your salary"/>
                        <div>
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