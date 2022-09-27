import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from '../templates/Banner';
import { Footer } from '../templates/Footer';
import { TopNav } from '../layout/TopNav';
import { WhatWeDo } from '../feature/WhatWeDo';
import { ImageHero } from '../hero/ImageHero';
// import { VerticalFeatures } from '../templates/VerticalFeatures';
import { FullWidthText } from '../feature/FullWidthText';
import { PressReleases } from '../feature/PressReleases';

const Index = () => 
<>
  {/* <div className="antialiased text-gray-600"> */}
      
      <WhatWeDo />
      <FullWidthText />
      <PressReleases />
      {/* <VerticalFeatures /> */}
      <Banner />
    {/* </div> */}
</>;

export default Index;
