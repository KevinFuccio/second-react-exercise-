import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import books from "./data/horror.json";
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import WelcomeComponent from './components/WelcomeComponent';
// import AllTheBooks from './components/AllTheBooksComponent'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList';

function App() {
  return(
    <>
    <NavComponent/>
    <WelcomeComponent title="Ciao! Sono un Jumbo" mainText="E molto bello..." buttonText="Cliccami!"/>
    {/* <div className='row row-col-4 justify-content-center'>
      <AllTheBooks/>
    </div> */}
    <SingleBook book={books[0]}/>
    <div>
    <BookList books={books}/>
    </div>
    <FooterComponent/>
    </>
  )
}

export default App;
