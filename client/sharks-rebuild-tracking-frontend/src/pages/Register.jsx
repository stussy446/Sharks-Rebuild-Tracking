import { Link } from 'react-router-dom';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

const Register = () => {
  return (
    <Wrapper>
      <form className="form" action="">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john" />
        <FormRow
          type="text"
          name="lastName"
          defaultValue="smith"
          labelText="last name"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="example@gmail.com" />
        <FormRow type="password" name="password" defaultValue="12345" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
