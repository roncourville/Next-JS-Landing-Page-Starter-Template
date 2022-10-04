import React, { useState, useEffect } from 'react';
// import Image from './Image'
// import Link from './Link'
import axios from "axios";
import {
  QueryClient,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { request, gql } from "graphql-request";

const queryClient = new QueryClient();

function usePosts() {
  return useQuery(["get-articles"], async () => {
    const { articles } = await request(
      'https://6fonrbvk.directus.app/graphql',
      gql`
      query {
        articles (limit: 10) {
          date_created
          image {
            id
          }
          translations {
            title
            body
            summary
            languages_id {
              name
            }
          }
        }
      }
      `
    );
    
    console.warn(articles);
    return articles;
  });
}

const PressReleases = () => {
  const [pressReleases, setPressReleases] = useState([]);
  const { status, data, error, isFetching } = usePosts();


  
  return (
    
<section className="bg-white dark:bg-gray-900">
  
  <div className="container px-6 py-10">
    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white mx-auto">
      Press Releases
    </h1>
    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

      {data?.map( o => (
        <div className="lg:flex">
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src={`https://6fonrbvk.directus.app/assets/${o.image.id}?fit=cover&width=300&height=300&quality=80`}
          alt=""
        />
        <div className="flex flex-col justify-between lg:mx-6 text-left">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            {o.translations[0].title}
          </a>
          <span>{o.translations[0].summary.substring(0,132)}.</span>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: {o.date_created}
          </span>
        </div>
      </div>
      ))}

    </div>
  </div>
</section>

)}

export {PressReleases}
