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
import UsaFacts from './pages/UsaFacts'
import Scholarships from './pages/Scholarships'
import VisaInterview from './pages/VisaInterview'
import CompareSchools from './pages/CompareSchools'
import Checklist from './pages/Checklist'
import Blog from './pages/Blog'

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
      { path: 'usa-facts', element: <UsaFacts /> },
      { path: 'scholarships', element: <Scholarships /> },
      { path: 'visa-interview', element: <VisaInterview /> },
      { path: 'compare', element: <CompareSchools /> },
      { path: 'checklist', element: <Checklist /> },
      { path: 'blog', element: <Blog /> },
      { path: 'ai-chat', element: <AiChat /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
