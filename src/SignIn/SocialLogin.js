import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
          const navigate = useNavigate();
          let errorElement;
        

           if(loading){
        return <Loading></Loading>
           }
      
          if (error) {
          errorElement = <div>
           <p className='text-danger'>Error: {error?.message}</p>
           </div>
          }
      
          if (user) {
              navigate('/home');
          }
    return (
        <div>
        <div class="divider">OR</div>
          {errorElement}
         
          <div className=''>
              <button

                  onClick={() => signInWithGoogle()}
                  className='btn bg-blue-700 w-full d-block mx-auto my-2'>
                   
                   <img className=' w-15 h-8' src ='https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_960_720.png'></img> 
                   <p>Google Sign in</p>
              </button>    
              </div>
        </div> 
    );
};

export default SocialLogin;