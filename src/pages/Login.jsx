import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import LoginForm from '../components/LoginForm';
import logo from '../assets/img/logo.png';
import ecommerce from '../assets/img/ecommerce.json';

export default function Login() {
  return (
    <section className="container-fluid">
      <div className="row justify-content-center align-items-center h100">
        <div className="col-6 col-lg-4 col-xl-3 col-xxl-2">
          <Player
            autoplay
            keepLastFrame
            loop={false}
            speed={0.5}
            src={ecommerce}
          />
        </div>
        <div className="col-11 col-lg-1 my-3 mx-5 d-none d-lg-block" style={{ height: '500px', width: '1px' }}>
          <div style={{ borderRight: '1px solid #CCCAD6', height: '100%' }} />
        </div>
        <div className="col-11 col-lg-4 col-xl-4 col-xxl-2">
          <img
            src={logo}
            className="img-fluid mx-auto d-block mb-5"
            style={{ maxHeight: '80px' }}
            alt="VE-commerce"
          />
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
