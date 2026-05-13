import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import VisaUpdates from './pages/VisaUpdates'
import Stem from './pages/Stem'
import Faq from './pages/Faq'
import GenerateScript from './pages/GenerateScript'
import Contact from './pages/Contact'
import AiChat from './pages/AiChat'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'calculator', element: <Calculator /> },
      { path: 'visa', element: <VisaUpdates /> },
      { path: 'stem', element: <Stem /> },
      { path: 'faq', element: <Faq /> },
      { path: 'generate', element: <GenerateScript /> },
      { path: 'contact', element: <Contact /> },
      { path: 'ai-chat', element: <AiChat /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
