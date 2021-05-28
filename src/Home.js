import React, { useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';


function Home() {
    
    const { isLoading, error, data, isFetching } = useQuery(
        'repoData', 
        () =>
        axios.get('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
        res.data),
        {
            // refetchOnWindowFocus:false
            // staleTime: 10000 // used to determine when a data should become stale
            //cacheTime: 5000 //used to determine the time a data should be cached
        }
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
        {isFetching && 'Updating...'}
        
        
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong> {data.subscribers_count}</strong>{' '}
      <strong>{data.stargazers_count}</strong>{' '}
      <strong>{data.forks_count}</strong>
      
    </div>
  )
}

export default Home
