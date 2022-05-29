import React from 'react'
import style from './../styles/login.module.css'
import logo from '../images/logo.png'

function Login() {
  return (
    <section className={`container-fluid p-0 m-0 ${style.body}`}>
      <div
        className={`container d-flex justify-space-around ${style.bigContainer}`}
      >
        <section className={`container-fluid w-50 ${style.important}`}></section>
        <section className={`${logo.rightSide} w-50 d-flex justify-center align-center h-100`}>
          <img src={logo} className="image-responsive" alt="logo" />
        </section>
      </div>
    </section>
  );
}

export default Login