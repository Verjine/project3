import React, {useState} from "react";
import "./Lilit.css";
import data from "./mock-data.json";

const Lilittable = () => {
  const [contacts, setContacts] = useState(data);
  const [addformData, setaddformData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const handleAddFormChange = (event) => {
    event.reventDafault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newformData = {...addformData};
    newformData[fieldName] = fieldValue

    setaddformData(newformData);
  };
  return <div className="app-container">
    <table>
      <thead>
        <tr>
        <th>Имя</th>
        <th>Адрес</th>
        <th>Номер телефона</th>
        <th>Эл. адрес</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact)=> (
        <tr>
          <td>{contact.fullName}</td>
          <td>{contact.addres}</td>
          <td>{contact.phoneNumber}</td>
          <td>{contact.email}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <h2>Добавить контакт</h2>
    <form>
      <input
      type="text"
       name="fulName"
       required="required"
       placeholder="Enter a name..."
       onChange={handleAddFormChange}
       />
       <input
       type="text"
       name="Адрес"
       required="required"
       placeholder="Enter an addres..."
       onChange={handleAddFormChange}
       />
        <input
      type="text"
       name="Номер телефона"
       required="required"
       placeholder="Enter a phone number..."
       onChange={handleAddFormChange}
       />
       <input
      type="text"
       name="Эл. адрес"
       required="required"
       placeholder="Enter an email..."
       onChange={handleAddFormChange}
       />
       <button type="submit">Add</button>
    </form>
  </div>;
};

export default Lilittable;