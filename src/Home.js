import React from 'react'
import { useServerRequest } from './hooks/Hooks'


function Home() {
    
    const { isLoading, error, data, isFetching } = useServerRequest('https://api.github.com/repos/tannerlinsley/react-query');

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
