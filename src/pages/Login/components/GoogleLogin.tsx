import { GoogleLogin as GoogleLoginButton } from 'react-google-login';

const GoogleLogin = () => {
  const responseGoogle = () => {};

  return (
    <>
      <GoogleLoginButton
        className="google-login-button"
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleLogin;
