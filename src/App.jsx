import Footer from './Components/Footer';
import AllProducts from './Components/Products';
import Header from './Components/Header';
import Services from './Components/services';
function App() {
  return (
    <div className="App">
      <Header/>;
      <AllProducts/>
      <Services/>;    
      <Footer/>;
    </div>
  );
}

export default App;
