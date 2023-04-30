import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import './styles/App.scss'
import './styles/resposive.scss'

function App() {
  return (
    <div className="App">      
      <Router>      
        <Header/>  
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
