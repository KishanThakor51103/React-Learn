import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>This is Kishan</h1>
      <Card 
          userName='Khanak' 
          age={20}
          female={true}
          btnText='click me'
      />
      <Card
          userName='Deepa' 
          age={22}
          female={true}
          btnText='visit me'
      />
    </>
  )
}

export default App
