import useJsonFetch from '../hooks/useJsonFetch';
import Data from "../components/Data/Data"
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';

const Component = ({type}) => {
    const [{data, isLoading, hasError}] = useJsonFetch(process.env.REACT_APP_BASE_URL, type)
    return (
        <div>
            {isLoading && <Loader />}
            {(!isLoading && hasError) && <Error error={hasError} />}
            {(!isLoading && data.status) && <Data />}
        </div>
    )
}

export default Component;