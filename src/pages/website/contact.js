import React from "react";
import { NewNavbar } from "../../components/website/navbar";
import { Footer } from "../../components/website/footer";
// import "../website/contact.css";

export const Contact = () => {
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

          <form action="" className="mt-5">
            <input type="text" className="mt-3" placeholder="Name" /> <br />
            <input type="email" className="mt-3" placeholder="Email" /> <br />
            <textarea
              name="txtarea"
              id="txtarea"
              placeholder="Message"
              cols="30"
              rows="10"
              className="mt-3"
            ></textarea>
          </form>
          <div className="button mt-3">
            <button className="WorkWithUsBtnn mt-3 mb-3">Submit</button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
