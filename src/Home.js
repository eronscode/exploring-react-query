import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

function Home() {
    const { isLoading, error, data } = useQuery('repoData', () =>
    axios.get('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.data
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong> {data.subscribers_count}</strong>{' '}
      <strong>{data.stargazers_count}</strong>{' '}
      <strong>{data.forks_count}</strong>
    </div>
  )
}

export default Home
