import logo from './logo.svg';
import './Navbar.css';

function App() {
  return (
    <div className='navbar'>
            <div className='logo'>
                <img src='logo.svg' alt="Logo"/>
            </div>
            <div className='search-bar'>
                <input type='text' placeholder='Search' />
                <button>Search</button>
            </div>
            <div className='feedback-btn'>
                <button>Feedback</button>
            </div>
        </div>
  ); 
}

export default App;
