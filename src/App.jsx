import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="h-screen bg-[url('/gradient.svg')] bg-cover bg-center">
      <header>
        <Header />
      </header>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-[350px_1fr]">
        {/* Sidebar */}
        <aside>
          <Sidebar />
        </aside>
      </div>
    </div>
  )
}

export default App