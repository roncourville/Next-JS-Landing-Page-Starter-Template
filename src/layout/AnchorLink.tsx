import React, { ReactNode } from 'react';

import NavBarItem from './NavBarItem';

type IAnchorLinkProps = {
  href?: any,
  className?: any,
  icon?: any,
  tabIndex?: any,
  testId?: any,
  children: ReactNode;
};

const AnchorLink = ({ children, href, className, icon, tabIndex, testId } : IAnchorLinkProps) => {
  return (
    <a href={href}>
      <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
        {children}
      </NavBarItem>
    </a>
  );
};

export default AnchorLink;
