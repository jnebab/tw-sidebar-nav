import { useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleShowSidebar = () => setShowSidebar(old => !old)
  return (
    <div className="bg-gray-100 relative min-h-screen md:flex">
      <Header onShowSidebar={handleShowSidebar}/>
      <Sidebar show={showSidebar}/>
      <main className="flex-1 p-10 text-2xl font-bold">Main Content</main>
    </div>
  );
}

export default App;
