import FacebookLogin from "react-facebook-login";

const Facebook = () => {
  const facebookAppId = import.meta.env.VITE_FACEBOOK_APP_ID;

  const responseFacebook = (response) => {
    // Handle the response from Facebook login
    console.log(response);
  };

  return (
    <div>
      <p className="text-3xl font-bold">Facebook API</p>
      <FacebookLogin
        appId={facebookAppId}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        //   onClick={componentClicked}
      />
    </div>
  );
};

export default Facebook;
