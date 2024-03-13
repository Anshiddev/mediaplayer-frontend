import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="d-flex bg-primary w-100 flex-column">
      <div className="row p-5">
        <div className="col">
          <h4>Media Player 2024</h4>
          <p style={{ textAlign: "justify" }}>
            A media player is a software or a hardware device that is used to
            play audio and video files. It can play digital media files from a
            storage device, a disc, or streamed from the internet.
          </p>
        </div>

        <div className="col">
          <h4>Page Links</h4>
          <Link to={""} style={{ color: "black",textDecoration:'none'}}>
            Landing
          </Link><br />
          <Link to={"dash"} style={{ color: "black",textDecoration:'none' }}>
            Dashboard
          </Link><br />
          <Link to={"his"} style={{ color: "black" ,textDecoration:'none'}}>
            History
          </Link><br />
        </div>

        <div className="col">
          <h4>Reference</h4>
          <a href="https://getbootstrap.com/" style={{ color: "black",textDecoration:'none' }} target="_blank">
            Bootstrap
          </a><br />
          <a href="https://react-bootstrap.netlify.app/" style={{ color: "black",textDecoration:'none' }} target="_blank">
            Bootstrap-React
          </a><br />
          <a href="https://react.dev/" style={{ color: "black",textDecoration:'none' }} target="_blank">
            React
          </a><br />
        </div>
      </div>

      <div className="text-center">
        <p>&copy; Media Player 2024</p>
      </div>
    </div>
  );
}

export default Footer;
