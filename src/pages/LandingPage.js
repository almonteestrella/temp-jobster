import { Logo } from '../components';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      {/* two columns layout */}
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A iste
            voluptas earum deleniti dicta odit voluptatem doloremque nemo, modi
            soluta veniam nobis voluptatibus, est illo atque sint porro unde
            nisi architecto at eligendi provident? Alias voluptate, optio
            deleniti fugit cupiditate sed rem aliquid quibusdam molestiae non
            asperiores. Numquam, fugit omnis.
          </p>
          <Link className="btn btn-hero" to={'/register'}>
            login / register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="main-img img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
