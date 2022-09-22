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
  <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <TopNav />
      <ImageHero
        title='There are many ways to live with breast cancer. Each woman will make her own choices and walk her own path.'
        description='Hello world'
        button={(<button>test</button>)}
      />
      <WhatWeDo />
      <FullWidthText />
      <PressReleases />
      {/* <VerticalFeatures /> */}
      <Banner />
      <Footer />
    </div>
</>;

export default Index;
