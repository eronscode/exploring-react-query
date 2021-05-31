import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useServerRequest } from './hooks/Hooks'


function Home() {
    const email = 'Shanna@melissa.tv';
    const userQuery = useServerRequest('users', 'https://jsonplaceholder.typicode.com/users?email='+email);
    const postQuery = useQuery(
        'posts', 
        () =>
        axios.get('https://jsonplaceholder.typicode.com/posts?userId='+userQuery.data?.id).then(res =>
        res.data),
        {
            enabled: !!userQuery.data?.id
        }
    )


//   if (isLoading) return 'Loading...'

//   if (error) return 'An error has occurred: ' + error.message

  return userQuery.isLoading ? (
        <p>Loading</p>
    )
    :
    userQuery.error ?
    (
        <p>Error Occured!</p>
    )
    :
    (
        <div>
            <p>User: {userQuery.data.id}</p>
            {postQuery.isIdle ? (
                'loading'
            ):
            postQuery.isLoading ? (
                'loading'
            )
            :
            (
                <div>
                    post count {postQuery.data.length}
                </div>
            )
            
            }
        </div>
    )
  

}

export default Home
