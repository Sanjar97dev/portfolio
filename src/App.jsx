import Footer from './components/Footer';
import Main from './components/Main';
import Routes from './routers/Routers'; // Adjusted to match the file name


const App = () => {
  return (
    <div className="bg-indigo-600">
      <Main />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
