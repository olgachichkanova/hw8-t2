import './App.css';
import Data from './components/Data/Data';
import Error from './components/Error/Error';
import Loader from './components/Loader/Loader';
import useJsonFetch from './hooks/useJsonFetch';

function App() {
  const [{data, isLoading, hasError}] = useJsonFetch(process.env.REACT_APP_BASE_URL, 'data')

  return (
    <div className="App">
      {isLoading && <Loader />}
      {(!isLoading && hasError) && <Error error={hasError} />}
      {(!isLoading && data.status) && <Data />}
    </div>
  );
}

export default App;
