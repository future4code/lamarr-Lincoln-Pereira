
import Card from './components/Card/Card';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import { DetailsPage } from './pages/DetailsPage';
import { Homepage } from './pages/Homepage';



function App() {
  return (
    <div ClassName="App">
      <GlobalStyle/>
      <Homepage/>
      {/* <DetailsPage/> */}
    </div>
  );
}

export default App;