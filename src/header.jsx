import React from "react"

import {Navbar} from "react-bootstrap"




function Header(){

return <div>


<Navbar className="Header"  variant="dark">
<Navbar.Brand href="#home">
  <img
    alt=""
    src="./images/Union.png"
    width="30"
    height="30"
    className="d-inline-block align-top"
  />{' '}
  <img src="./images/lendsqr.svg" />
</Navbar.Brand>
</Navbar>

</div>

}

export default Header;



