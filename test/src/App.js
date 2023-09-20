import './index.css';
import Nav from './components/nav';
import Home from './components/Home';
import Sidebar from './components/sidebar';
export default function App() {
  return (
    <>
      <Nav />
      <Sidebar><Home /></Sidebar>

    </>
  )
}