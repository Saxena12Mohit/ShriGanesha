import { useState } from "react";
import React from 'react'

function Contact() {
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is :${data.Name} and phone n.o is${data.phone} and email is ${data.email}`);
  }
  const [data, setdata] = useState({ Name: '', phone: '', email: '' });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setdata(preval => { return { ...preval, [name]: value, } })
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 ">
            <div className="mb-3 text-center">
              <div className="h4">
                <strong> Contact Us</strong>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Write your full name here
              </label>
              <input type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name='Name'
                value={data.Name}
                onChange={InputEvent}
                placeholder="Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number
              </label>
              <input type="Number"
                className="form-control"
                id="exampleFormControlInput1"
                name='phone'
                value={data.phone}
                onChange={InputEvent}
                placeholder="Phone_Number" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address
              </label>
              <input type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name='email'
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message
              </label>
              <textarea className="form-control"
                id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <form className="d-flex" role="search" onSubmit={formSubmit}>

                <button className="btn btn-outline-success"  type="submit">Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
