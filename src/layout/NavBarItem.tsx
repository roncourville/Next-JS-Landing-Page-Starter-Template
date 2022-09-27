import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface INavBarItemProps {
  href: any,
  className?: any,
  icon?: any,
  tabIndex?: any,
  testId?: any,
  children: ReactNode;
}

const NavBarItem = ({ children, href, className, icon, tabIndex, testId }: INavBarItemProps) => {
  const router = useRouter();
  const activeClass = 'navbar-item-active';
  const activeClasses = className ? `${className} ${activeClass}` : activeClass;

  return (
    <span className="d-inline-flex align-items-center navbar-item">
      {icon && <FontAwesomeIcon icon={icon} className="mr-3" />}
      <span className={router.asPath === href ? activeClasses : className} tabIndex={tabIndex} data-testid={testId}>
        {children}
      </span>
    </span>
  );
};

export default NavBarItem;