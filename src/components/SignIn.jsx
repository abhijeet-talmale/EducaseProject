import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../assets/css/Sign.css';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className='container-fluid form-box p-3 d-flex flex-column justify-content-center  shadow border-2'>
        <p className='fs-4'>Sign in to your PopX account</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
           navigate('/profile')
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form className=" mb-3" onSubmit={handleSubmit}>
           
           <input
           className='form-control'
             type="email"
             placeholder='Enter Your Email address'
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             
           />
           <label className='label1'>Email</label>
           {errors.email && touched.email && errors.email}
           <input
           className='form-control'
             type="password"
             name="password"
             placeholder='Enter Your Password'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           <label className='label1'>Password</label>
           {errors.password && touched.password && errors.password}
           <button className=" form-control btn"  type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default SignIn