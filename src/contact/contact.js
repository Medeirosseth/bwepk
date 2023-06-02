import React from "react";
import "./contact.css";
// function sendMail() {
//   var params = {
//     name: document.getElementById("name").ariaValueMax,
//     email: document.getElementById("email").ariaValueMax,
//     message: document.getElementById("message").value,
//   };
//   const serviceID = "service_w6s5g7t";
//   const templateID = "template_sb0gsls";

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("Message sent");
//     })
//     .catch((err) => console.log(err));
// }

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container  mt-3 bg-dark ">
        <div className="row">
          <div className="col-lg-6 py-3 text-white">
            <h1 className="d-flex justify-content-center contact">
              <div className="c mx-2">C</div>
              <div className="o mx-2">O</div>
              <div className="n mx-2">N</div>
              <div className="t mx-2">T</div>
              <div className="a mx-2">A</div>
              <div className="Cc mx-2">C</div>
              <div className="Tt mx-2">T</div>
              <div className=": mx-2">:</div>
            </h1>
            <div className="form-group">
              <h5 for="name">Name</h5>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
              ></input>
            </div>
            <div className="form-group">
              <h5 for="email">Email</h5>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Email"
              ></input>
            </div>
            <div className="form-group">
              <h5 for="message">Message</h5>
              <textarea
                id="message"
                row="3"
                className="form-control"
              ></textarea>
            </div>
            <button className="btn btn-outline-light m-auto my-2 d-flex justify-content-center">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
