const Auth = () => {
  return (
    <div className="auth-sign-in">
      <div className="sign-in">
        <h1>Welcome Back👋</h1>
        <p>This is John&apos;s page</p>

        <label className="mobile-num">Mobile Number:</label>
        <input type="tel" placeholder="123-456-7890" className="mobile-input" />
        <a href="#">Forgot Password?</a>
        <button>Sign In</button>
      </div>
      <div className="sign-in-image">
        <img src=".\imagesauth\flower images.jpg"></img>
      </div>
    </div>
  )
}

export default Auth
