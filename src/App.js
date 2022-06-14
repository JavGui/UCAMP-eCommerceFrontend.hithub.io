import Header from './components/Header'
// import Home from "../src/components/Home/Home";
import Footer from './components/Footer'
import ProductState from './context/ProductState'
import UserState from './context/UserState'
import Main from './components/Main'

import './App.css'

function App() {
  return (
    <div>
      <ProductState>
        <UserState>
          <Header/>
          <Main/>
          <Footer/>
        </UserState>         
      </ProductState>
    </div>
  )
}

export default App;

