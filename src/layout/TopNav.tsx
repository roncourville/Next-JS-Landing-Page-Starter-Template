import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Section } from "./Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "../templates/Logo";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  NavLink
} from "reactstrap";
import { useUser } from "@auth0/nextjs-auth0";
import PageLink from "./PageLink";
import AnchorLink from "./AnchorLink";
import { isUserSignedIn } from "../utils/utils";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const { user, isLoading } = useUser();
  const toggle = () => {console.log(1); setIsOpen(!isOpen)};

  const [dropdownOpen, setIsOpen2] = useState(false);
  const toggle2 = () => {console.log(2); setIsOpen2(!dropdownOpen)};

  const [userSignedIn, setUserInfo] = useState(false);

  useEffect(() => {
    (async () => {
      setUserInfo(await isUserSignedIn());
    })();
  }, []);

  return (
    <header className="text-center">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo />}>
          {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li> */}
          <li>
            <Link href="#">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>FAQ</a>
            </Link>
          </li>

          {!userSignedIn && (

                              <li>
                              <AnchorLink
href="/login"
icon="power-off"
testId="navbar-logout-desktop"
>
Sign in
</AnchorLink>
</li>
                    )}



          {userSignedIn && (
            <>
                                <li>
                                <Link href="#">
                                  <a>Secured link</a>
                                </Link>
                              </li>

                              <li>
                                                            <AnchorLink
                              href="/logout"
                              icon="power-off"
                              testId="navbar-logout-desktop"
                            >
                              Log out
                            </AnchorLink>
                              </li>


                              </>
                    )}

          {/* <Dropdown isOpen={dropdownOpen} toggle={toggle2}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}

        </NavbarTwoColumns>
      </Section>
    </header>
  );
};

export { TopNav };
