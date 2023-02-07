import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import WelcomeComponent from './components/WelcomeComponent';
import AllTheBooks from './components/AllTheBooksComponent'

function App() {
  return(
    <>
    <NavComponent/>
    <WelcomeComponent title="Ciao! Sono un Jumbo" mainText="E molto bello..." buttonText="Cliccami!"/>
    <div className='row row-col-4 justify-content-center'>
      <AllTheBooks/>
    </div>
    <FooterComponent/>
    </>
  )
}

export default App;
