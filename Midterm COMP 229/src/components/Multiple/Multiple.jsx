import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const initialFormData = {
    name: "",
    description: "",
    category: "Food",
    quantity: "",
    price: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Make sure only positive numbers can be input
  const handleInput = (event) => {
    const {name, value} = event.target;

    if(/^\d*\.?\d*$/.test(value)){
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.quantity}, Price: $${formData.price}`
    );
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <label className="title">New Product</label>
      <label className="label_text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="user_input"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label className="label_text" htmlFor="description">
        Description:
      </label>
      <textarea
        id="description"
        className="user_input_textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <label className="label_text" htmlFor="category">
        Category:
      </label>
      <select value={formData.category} name="category" onChange={handleChange}>
        <option value="Food">Food</option>
        <option value="Clothing">Clothing</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Sport Equipment">Sport Equipment</option>
        <option value="Healthcare">Healthcare</option>
      </select>
      <label className="label_text" htmlFor="quantity">
        Quantity:
      </label>
      <input
        type="text"
        id="quantity"
        className="user_input"
        name="quantity"
        value={formData.quantity}
        onInput={handleInput}
        required
      />
      <label className="label_text" htmlFor="price">
        Price:
      </label>
      <input
        type="text"
        id="price"
        className="user_input"
        name="price"
        value={formData.price}
        onInput={handleInput}
        required
      />
      <div className="buttons">
        <button className="multiple_button" type="submit">
          Submit
        </button>
        <button className="multiple_button" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}