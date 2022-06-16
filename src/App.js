import Header from './components/Header'
import Footer from './components/Footer'
import ProductState from './context/ProductState'
import UserState from './context/UserState'
import Main from './components/Main'

import './App.css'

function App() {
  return (
    <div>
      <UserState>
        <ProductState>
          <Header/>
          <Main/>
          <Footer/>
        </ProductState>
      </UserState>
    </div>
  )
}

export default App;

