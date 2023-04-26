import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Footer from './Components/Footer';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('Dark')
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  const [text, setText] = useState('');


  let toggleMode = (mode) => {
    if (mode === 'dark') {
      setMode('dark');
      setModeText('Light');
      console.log('Dark Mode Enabled');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark mode enabled!!!', 'success');
    }
    else if (mode === 'light') {
      setMode('light');
      setModeText('dark');
      console.log('Light Mode Enabled');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled!!!', 'success');
    }
    else if (mode === "blue") {
      document.body.style.backgroundColor = "#182e4e";
      document.body.style.color = 'white';
      showAlert('Blue mode enabled!!!', 'success');

    }
    else if (mode === "grey") {
      document.body.style.backgroundColor = "grey";
      document.body.style.color = 'white';
      showAlert('Grey mode enabled!!!', 'success');
    }
    else {
      document.body.style.backgroundColor = "cyan";
      document.body.style.color = 'white';
      showAlert('Cyan mode enabled!!!', 'success');
    }
  }
  return (
    <Router>
      <Header title="TextUtils" mode={mode} modeText={modeText} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route exact path="/" element={<TextForm />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  
  );
}

export default App;


