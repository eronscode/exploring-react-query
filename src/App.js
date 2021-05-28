import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './Home';

const queryClient = new QueryClient()

function App() {
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
      <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
  );
}


export default App;
