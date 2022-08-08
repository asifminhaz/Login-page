import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SignIn/SocialLogin';
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()
      const nameRef = useRef('')
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const navigateLogin = event => {
                navigate('/login')
      }
      const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        createUserWithEmailAndPassword(email, password)
}
    return (
        <div>
          
            <div class="hero min-h-screen bg-blue ">
            <form onSubmit={handleRegister}>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
     
    <img src="https://cdn.pixabay.com/photo/2021/11/18/11/35/attack-6806140_960_720.png"></img>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm max-w-lg ">
      <div class="card-body">
      <h1 className='text-center text-4xl'>Please Create an Account</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input ref={emailRef} type="text" placeholder="email" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input ref={passwordRef} type="text" placeholder="password" class="input input-bordered"required />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn bg-blue-500">Register</button>
          <p className='mt-2'>Already have an Account?  <Link to='/login' className='text-error ' onClick={navigateLogin}>Please Sign in!!</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    
  </div>
  </form>
</div>
        </div>
    );
};

export default SignUp;