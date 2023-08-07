import Testimonial from "./components/Testimonial";
import data from './data';
function App() {
  return (
    <div className="App">
      <h1 className="heading">Testimonial App</h1>
      <div className="line"></div>
      <Testimonial reviews={data} />
    </div>
  );
}

export default App;
