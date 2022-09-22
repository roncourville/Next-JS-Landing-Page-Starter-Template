import Link from "next/link";
// import { ReactNode } from "react";
import { Section } from "./Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "../templates/Logo";

const TopNav = () => (
  <header className="text-center">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li> */}
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>FAQ</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>

      </NavbarTwoColumns>
    </Section>
  </header>
);

export { TopNav };
