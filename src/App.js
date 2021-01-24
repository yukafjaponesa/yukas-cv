import logo from './logo.svg';
import './App.css';
import Header from './sections/Header';
import Contact from './sections/Contact';
import Work from './sections/Work';
import Education from './sections/Education';
import Languages from './sections/Languages';
import Resources from './sections/Resources';
import './sections/styles.css';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Contact />
      <Resources />
      <Education />
      <Work />
      <Languages />
    </div>
  );
}

export default App;
