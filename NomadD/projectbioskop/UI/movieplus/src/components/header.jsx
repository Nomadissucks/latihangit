import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GiHummingbird, GiShoppingCart } from "react-icons/gi";
import { AiOutlineLogin } from "react-icons/ai";
import { LogoutAction } from "./../redux/actions/AuthActions";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const tombolLogout = () => {
    localStorage.removeItem("bebas");
    this.props.LogoutAction();
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <GiHummingbird />
          HummingStudios
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to={"/halamanadmin"} className="mr-2">
                Admin
              </Link>
            </NavItem>
            <NavItem>
              <Link to={"/cart"} className="mr-2">
                <GiShoppingCart />
              </Link>
            </NavItem>
            {props.namauser === "" ? (
              <NavItem>
                <Link to={"/loginpage"} className="mr-2">
                  Login <AiOutlineLogin />
                </Link>
              </NavItem>
            ) : null}
            {props.namauser === "" ? null : (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {props.namauser}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>
                    <Link to={"/"} onClick={tombolLogout}>
                      LogOut
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to={"/changepassword"}>Change Password</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
const MapStateToProps = state => {
  return {
    namauser: state.Auth.username,
    role: state.Auth.role,
    Auth: state.Auth.login
  };
};

export default connect(MapStateToProps, { LogoutAction })(Header);
