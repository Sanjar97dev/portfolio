import Footer from './components/Footer';
import Main from './components/Main';
import ResumeManager from './components/ResumeManager';
import Routes from './routers/Routers'; // Adjusted to match the file name


const App = () => {
  return (
    <div className="bg-indigo-600">
      <Main />
      <Routes />
      <ResumeManager/>
      <Footer />
    </div>
  );
};

export default App;
