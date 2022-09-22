// import Image from './Image'
// import Link from './Link'

const PressReleases = () => (
<section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
      Press Releases
    </h1>
    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
      <div className="lg:flex">
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            Nemo enim ipsam voluptatem
          </a>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 20 October 2019
          </span>
        </div>
      </div>
      <div className="lg:flex">
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            Ut enim ad minima veniam
          </a>
          <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</span>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 20 October 2019
          </span>
        </div>
      </div>
      <div className="lg:flex">
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            Duis aute irure dolor in reprehenderit
          </a>
          <span>Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</span>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 25 November 2020
          </span>
        </div>
      </div>
      <div className="lg:flex">
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
          alt=""
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            Excepteur sint occaecat cupidatat non proident
          </a>
          <span>Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</span>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 30 September 2020
          </span>
        </div>
      </div>
      
      
    </div>
  </div>
</section>

)

export {PressReleases}
