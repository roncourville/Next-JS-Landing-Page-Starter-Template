import { ReactNode } from 'react';
// import logoImg from '../../public/assets/images/logo.png';
import { useRouter } from 'next/router';
import image from 'next/image';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const Logo = () => {
  const router = useRouter();
  return (
    <img src={`${router.basePath}/assets/images/logo.png`} style={{maxWidth: '340px'}}/>
    // <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
    //   <svg
    //     className="text-primary-500 stroke-current mr-1"
    //     xmlns="http://www.w3.org/2000/svg"
    //     width={size}
    //     height={size}
    //     viewBox="0 0 24 24"
    //     strokeWidth="1.5"
    //     fill="none"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   >
    //     <path d="M0 0h24v24H0z" stroke="none" />
    //     <rect x="3" y="12" width="6" height="8" rx="1" />
    //     <rect x="9" y="8" width="6" height="12" rx="1" />
    //     <rect x="15" y="4" width="6" height="16" rx="1" />
    //     <path d="M4 20h14" />
    //   </svg>

    //   {AppConfig.site_name}
    // </span>
  );
};

export { Logo };
