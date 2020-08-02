import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footers = () => {
  return (
    <MDBFooter  className="font-small dusty-grass-gradient mt-3">
      <MDBContainer>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://webbuy.xyz"> Webbuy.xyz </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footers;