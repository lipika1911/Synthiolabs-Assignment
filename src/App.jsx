import ActionArea from "./components/ActionArea"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="h-screen bg-[url('/gradient.svg')] bg-cover bg-center">
      <header>
        <Header />
      </header>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-[350px_1fr] mt-2">
        {/* Sidebar */}
        <aside>
          <Sidebar />
        </aside>
        <section className="min-h-[calc(100svh-80px)] bg-background rounded-t-2xl shadow-xs border-gray-100">
          <ActionArea />
        </section>
      </div>
    </div>
  )
}

export default App