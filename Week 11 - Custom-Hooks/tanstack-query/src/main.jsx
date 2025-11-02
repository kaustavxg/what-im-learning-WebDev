import { StrictMode } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Product from './Product.jsx'
import Products from './Products.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/products',
        element: <Products/>,
    },
    {
        path: '/products/:productId',
        element: <Product/>,
    },
]);

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000
      // data 10 seconds tak "fresh" rahega
      // react-query mein cached data ka ek staleTime hota hai — 
      // matlab kitni der tak cached data valid maana jayega. 
      // Yahan 10000 ms = 10 sec, to agle 10 sec tak react-query cache se data use karega 
      // aur new network request nahi bhejega. 
      // 10 sec ke baad data "stale" ho jayega; jab bhi zaroorat hogi to refetch ho sakta hai.
    }
  }
})

createRoot(document.getElementById('root')).render(


  // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  // <StrictMode>
    
  // </StrictMode>, 
)
