import { PressReleases } from "../feature/PressReleases2";

const News = () => (
  <>
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container text-center xl:max-w-6xl mx-auto px-4 pb-32">
        Entries below sourced from the CMS <a className="underline text-blue-800" href='https://6fonrbvk.directus.app/admin/content/articles'>Directus</a>.
        <PressReleases/>
      </div>
    </div>
  </>
);

export default News;
