import Views from './components/Views';
import Controllers from './components/Controllers';

function App() {
  return (
    <section className="constructor">
      <div className="container">
        <div className="row">
          <Views />       
          <Controllers />
        </div>
      </div>
    </section>
  );
}

export default App;