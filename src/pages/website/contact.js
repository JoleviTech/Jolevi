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
import { NewNavbar } from "../../components/website/navbar";
import { Footer } from "../../components/website/footer";
// import "../website/contact.css";

export const Contact = () => {
  // State variables for form fields and validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

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

      // Handle the response accordingly (e.g., show success message)
      console.log(response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error("Error submitting form:", error);
    }
  };

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
      <Footer />
    </div>
  );
};
