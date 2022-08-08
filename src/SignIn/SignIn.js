import { sendPasswordResetEmail} from 'firebase/auth';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import SocialLogin from './SocialLogin';

const SignIn = () => {
    const emailRef = useRef('')
          const passwordRef = useRef('')
          const navigate = useNavigate()
          const location = useLocation()
          let from = location.state?.from?.pathname || "/"

          const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);
          const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


          const handleSubmit = event => {
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            signInWithEmailAndPassword(email, password)
            
            
         
  }
  if(user){
    navigate(from, {replace: true});
}
  const navigateRegister = event => {
    navigate('/signup')
  }
  if(loading){
    return <Loading></Loading>
       }
       const resetPassword = async () => {
        const email= emailRef.current.value;
        if(email){
        await sendPasswordResetEmail(email);
      toast('Sent email');
        }
        else{
          toast('please enter your email')
        }

}
    return (
        <div>
            <h1 className='text-center text-4xl'>Please Log in</h1>
            <div class="hero min-h-screen ">
            <form onSubmit={handleSubmit}>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
     
    <img src="https://cdn.pixabay.com/photo/2021/11/18/11/35/attack-6806140_960_720.png"></img>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm max-w-lg ">
      <div class="card-body">
        {/* <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" class="input input-bordered" />
        </div> */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input ref={emailRef} type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input ref={passwordRef} type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            {/* <a href="#" class="label-text-alt link link-hover">Forgot password?</a> */}
            <p>Forget Pssword? <button className='text-primary btn btn-link' onClick={resetPassword}>Reset Password</button></p>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn  bg-blue-500">Login</button>
          <p>New to eShopping?<Link to='/signup' className='text-error ' onClick={navigateRegister}>Please Register!!</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    
  </div>
  </form>
</div>
<Footer></Footer>
        </div>
    );
};

export default SignIn;