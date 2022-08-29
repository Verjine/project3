import React, {useState} from "react";
import {nanoid} from "nanoid";
import "./Lilit.css";
import data from "./mock-data.json";

const Lilittable = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();



    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

console.log(fieldValue)
console.log("fieldName",fieldName)
    const newformData = {...addFormData};
    newformData[fieldName] = fieldValue

    setAddFormData(newformData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
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
          <td>{contact.address}</td>
          <td>{contact.phoneNumber}</td>
          <td>{contact.email}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <h2>Добавить контакт</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input
      type="text"
       name="fullName"
       required="required"
       placeholder="Enter a name..."
       onChange={handleAddFormChange}
       />
       <input
       type="text"
       name="address"
       required="required"
       placeholder="Enter an addres..."
       onChange={handleAddFormChange}
       />
        <input
      type="text"
       name="phoneNumber"
       required="required"
       placeholder="Enter a phone number..."
       onChange={handleAddFormChange}
       />
       <input
      type="text"
       name="email"
       required="required"
       placeholder="Enter an email..."
       onChange={handleAddFormChange}
       />
       <button type="submit">Add</button>
    </form>
  </div>;
};

export default Lilittable;