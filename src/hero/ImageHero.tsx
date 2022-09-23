import { ReactNode } from 'react';
// import HeroImage from '../../public/assets/images/hero.jpg';
import { useRouter } from 'next/router';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const ImageHero = (props: IHeroOneButtonProps) => {
  const router = useRouter();
  return (

    <section className="overflow-hidden">
      
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            `url(${router.basePath}/assets/images/hero.jpg)`,
          height: 500
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgb(24 12 1 / 35%)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white max-w-screen-lg mx-auto px-3 py-16">
            {/* <div className="max-w-screen-lg mx-auto px-3 py-16"> */}
              <h1 className="text-5xl md:text-4xl xl:text-7xl font-bold tracking-tight mb-6">
                {props.title}
              </h1>
              {/* <a
                className="inline-block px-7 py-3 mr-1.5 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Read more
              </a> */}
              <a
                className="inline-block border-2 border-transparent bg-transparent text-white font-medium text-md leading-snug rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out underline underline-offset-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn about our mission
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10"
        style={{
          height: 50,
          transform: "scale(2)",
          transformOrigin: "top center",
          color: "#fff"
        }}
      >
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
)};

export { ImageHero };
