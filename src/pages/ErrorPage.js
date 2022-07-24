import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>ohh! page not found</h3>
        <p>the page you tried can't not be found!</p>
        <Link to={'/'}>back to home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
