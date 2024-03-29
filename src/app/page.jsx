'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from '../App'

const Home = () => {
  const queryClient = new QueryClient()
  return (
    <div className='w-full'>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </div>
  )
}
export default Home
