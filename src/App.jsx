import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import MemoPage from './pages/memo/memoPage'
import UseCallbackPaige from './pages/useCallbackPaige/useCallbackPaige'
import UseMemoPage from './pages/useMemoPage/useMemoPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <MemoPage />,
      },    
      {
        path: '/UseCallbackPaige',
        element: <UseCallbackPaige />,
      },
      {
        path: '/UseMemoPage',
        element: <UseMemoPage />,
      },      
      
    ]
  }
])
function App() {
  const client = new QueryClient()

  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router}/>      
      </QueryClientProvider>
    </>
  )
}

export default App
