import React, { useState } from 'react';
import { Navbar, NavbarToggler } from 'reactstrap';

const NavToggler = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      </Navbar>
    </div>
  );
};

export default NavToggler;
