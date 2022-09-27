import React from 'react';
import Link from 'next/link';

import NavBarItem from './NavBarItem';

type IPageLinkProps = {
  href: string,
  className?: string,
  icon?: string,
  tabIndex?: any,
  testId?: any,
  children: ReactNode;
};

const PageLink = ({ children, href, className, icon, tabIndex, testId }: IPageLinkProps) => {
  return (
    <Link href={href}>
      <a>
        <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
          {children}
        </NavBarItem>
      </a>
    </Link>
  );
};

export default PageLink;
