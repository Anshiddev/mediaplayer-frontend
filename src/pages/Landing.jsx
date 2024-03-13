import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Landing() {
  return (
    <>
      <div
        className="w-100 d-flex justify-content-center align-items-center p-5"
        style={{ height: "80vh" }}
      >
        <div className="row">
          <div className="col shadow">
            <h2>Media Player</h2>
            <p style={{ textAlign: "justify" }}>
              A media player is a software or a hardware device that is used to
              play audio and video files. It can play digital media files from a
              storage device, a disc, or streamed from the internet.
            </p>
            <Link className="btn btn-primary" to={'dash'}>Explore</Link>
          </div>

          <div className="col">
            <img
              className="img-fluid rounded shadow"
              src="https://prod-images.dacast.com/wp-content/uploads/2022/11/video-playyer-html5-1024x683.jpeg"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h2 className="text-center">Features</h2>

        <div className="d-flex flex-row justify-content-between p-3">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "300px" }}
              src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif"
            />
            <Card.Body>
              <Card.Title>Upload Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "300px" }}
              src="https://i0.wp.com/codemyui.com/wp-content/uploads/2018/07/Play-Icon-to-Video-Animation-on-Click.gif?fit=880%2C400&ssl=1"
            />
            <Card.Body>
              <Card.Title>Play Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "300px" }}
              src="https://png.pngitem.com/pimgs/s/528-5288626_click-to-watch-video-hd-png-download.png"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="mt-3 p-5">
        <h2 className="text-center" style={{color: 'cyan'}}>Why Media Player ?</h2>
        <div className="d-flex mt-2 flex-row justify-content-center align-items-center">
          <div>
            <h3 style={{color: 'midnightblue'}}>Simple,Easy to Use,Secure</h3>
            <p >
              Simply Secure is rebranding as Superbloom. Superbloom leverages
              design as a transformative practice to shift power in the tech
              ecosystem, because everyone deserves technology they can trust.
            </p>
          </div>
          
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bMknfKXIFA8?si=FY0hYL1cediU_opH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>
      </div>
    </>
  );
}

export default Landing;
