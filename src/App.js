import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './Home';
import { useState } from 'react';

const queryClient = new QueryClient()

function App() {
  const [show, setShow] = useState(true)
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShow(show => !show)}>Show</button>
        {show && 
      <Home/> }
      <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
  );
}


export default App;
