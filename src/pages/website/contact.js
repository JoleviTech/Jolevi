// // import React from "react";
// // import { NewNavbar } from "../../components/website/navbar";
// // import { Footer } from "../../components/website/footer";
// // // import "../website/contact.css";

// // export const Contact = () => {
// //   return (
// //     <div className="container-fluid">
// //       <NewNavbar />
// //       <div
// //         className="main text-align-center"
// //         style={{
// //           display: "flex",
// //           justifyContent: "center",
// //           // backgroundColor: "#28B3E10D",
// //         }}
// //       >
// //         <div className="content mt-4">
// //           <div className="text-content">
// //             <h5 className="mt-3" style={{ fontWeight: "700" }}>
// //               <b>WE LOVE TO HEAR FROM YOU</b>
// //             </h5>
// //             <p
// //               style={{
// //                 width: "400px",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //               }}
// //             >
// //               We will get back to you within the next 24 hours, thank you.
// //             </p>
// //           </div>

// //           <form action="" className="mt-5">
// //             <input type="text" className="mt-3" placeholder="Name" /> <br />
// //             <input type="email" className="mt-3" placeholder="Email" /> <br />
// //             <textarea
// //               name="txtarea"
// //               id="txtarea"
// //               placeholder="Message"
// //               cols="30"
// //               rows="10"
// //               className="mt-3"
// //             ></textarea>
// //           </form>
// //           <div className="button mt-3">
// //             <button className="WorkWithUsBtnn mt-3 mb-3">Submit</button>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };
// import React, { useState } from "react";
// import axios from "axios";
// import { NewNavbar } from "../../components/website/navbar";
// import { Footer } from "../../components/website/footer";
// // import "../website/contact.css";

// export const Contact = () => {
//   // State variables for form fields and validation
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [errors, setErrors] = useState({});

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple form validation
//     const newErrors = {};
//     if (!name.trim()) {
//       newErrors.name = "Name is required";
//     }
//     if (!email.trim()) {
//       newErrors.email = "Email is required";
//     }
//     if (!message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // If validation passes, send data to the server
//     try {
//       const response = await axios.post("http://localhost:7000/contact", {
//         name,
//         email,
//         message,
//       });

//       // Handle the response accordingly (e.g., show success message)
//       console.log(response.data);
//     } catch (error) {
//       // Handle errors (e.g., show error message)
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <NewNavbar />
//       <div
//         className="main text-align-center"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           // backgroundColor: "#28B3E10D",
//         }}
//       >
//         <div className="content mt-4">
//           <div className="text-content">
//             <h5 className="mt-3" style={{ fontWeight: "700" }}>
//               <b>WE LOVE TO HEAR FROM YOU</b>
//             </h5>
//             <p
//               style={{
//                 width: "400px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               We will get back to you within the next 24 hours, thank you.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="mt-5">
//             <input
//               type="text"
//               className="mt-3"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//                 setErrors({ ...errors, name: "" }); // Clear validation error on change
//               }}
//             />
//             {errors.name && <p className="error-text m-0 p-0">{errors.name}</p>}

//             <input
//               type="email"
//               className="mt-3"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setErrors({ ...errors, email: "" }); // Clear validation error on change
//               }}
//             />
//             {errors.email && (
//               <p className="error-text m-0 p-0 ">{errors.email}</p>
//             )}

//             <textarea
//               name="txtarea"
//               id="txtarea"
//               placeholder="Message"
//               cols="30"
//               rows="10"
//               className="mt-3"
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//                 setErrors({ ...errors, message: "" }); // Clear validation error on change
//               }}
//             />
//             {errors.message && <p className="error-text">{errors.message}</p>}

//             <div className="button mt-3">
//               <button type="submit" className="WorkWithUsBtnn mt-3 mb-3">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

import { NewNavbar } from "../../components/website/navbar";
import { Footer } from "../../components/website/footer";
import successicon from "../../assets/website/icons/contact/successicon.jpg";

// import "../website/contact.css";

// Modal.js
// import React from "react";

// const Modal = ({ show, onClose, isSuccess, message }) => {
//   if (!show) {
//     return null;
//   }

//   return (
//     <div className={`modal ${isSuccess ? "success" : "error"}`}>
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <p>{message}</p>
//       </div>
//     </div>
//   );
// };

// export default Modal;

export const Contact = () => {
  // State variables for form fields and validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // const [showModal, setShowModal] = useState(false);
  // const [modalMessage, setModalMessage] = useState("");
  // const [isSuccess, setIsSuccess] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, send data to the server
    try {
      const response = await axios.post(
        "https://jolevi-app.onrender.com/contact",
        {
          name,
          email,
          message,
        }
      );

      // setModalMessage("Form submitted successfully!");
      // setIsSuccess(true);
      // setShowModal(true);
      setShowModal(true);
      setModalMessage(response.data.message); // Assuming a success message is returned
      setIsSuccess(true);

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
      // Handle the response accordingly (e.g., show success message)
      // console.log(response.data);
    } catch (error) {
      // setModalMessage("Error submitting form. Please try again later.");
      // setIsSuccess(false);
      // setShowModal(true);
      setShowModal(true);
      setModalMessage("Error submitting form: " + error.message);
      setIsSuccess(false);
      // Handle errors (e.g., show error message)
      console.error("Error submitting form:", error);
    }
  };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setModalMessage("");
  //   setIsSuccess(false);
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  //   setErrors({});
  // };

  return (
    <div className="container-fluid">
      <NewNavbar />
      <div
        className="main text-align-center"
        style={{
          display: "flex",
          justifyContent: "center",
          // backgroundColor: "#28B3E10D",
        }}
      >
        <div className="content mt-4">
          <div className="text-content">
            <h5 className="mt-3" style={{ fontWeight: "700" }}>
              <b>WE LOVE TO HEAR FROM YOU</b>
            </h5>
            <p
              style={{
                width: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              We will get back to you within the next 24 hours, thank you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-5">
            <input
              type="text"
              className="mt-3"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" }); // Clear validation error on change
              }}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
            <br />

            <input
              type="email"
              className="mt-3"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" }); // Clear validation error on change
              }}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            <br />

            <textarea
              name="txtarea"
              id="txtarea"
              placeholder="Message"
              cols="30"
              rows="10"
              className="mt-3"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors({ ...errors, message: "" }); // Clear validation error on change
              }}
            />
            {errors.message && <p className="error-text">{errors.message}</p>}

            <div className="button mt-3">
              <button type="submit" className="WorkWithUsBtnn mt-3 mb-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Modal
        show={showModal}
        onClose={closeModal}
        isSuccess={isSuccess}
        message={modalMessage}
      /> */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          {/* <Modal.Title>{isSuccess ? "Success!" : "Error"}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="text-center pb-0 mb-0">
          <img src={successicon} className="img-fluid" width="80" height="80" />
        </Modal.Body>
        <Modal.Body className="h5 text-center pt-0 mt-0">
          {modalMessage}
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>

      <Footer />
    </div>
  );
};
