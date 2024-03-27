import Wrapper from '../assets/wrappers/LandingPage';
import main from '../../src/assets/images/cheer.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            San Jose Sharks Rebuild <span>Tracking</span> App
          </h1>
          <p>
            Being a fan of this team is tough right now, but there is hope for
            the future! This website tracks the development of the team as we
            continue to claw our way out of this rebuild and back into Stanley
            Cup contention
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" />
      </div>
    </Wrapper>
  );
};

export default Landing;
