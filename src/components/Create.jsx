import React from 'react'
import { Formik } from 'formik';
import '../assets/css/Create.CSS';
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  return (
     <div className='container-fluid form-box1 p-3 d-flex flex-column justify-content-center  shadow border-2'>
            <p className='fs-4'>Create your PopX Account</p>
            <Formik
           initialValues={{ fullName: '',email:'', password: '',pnumber:'',cname:'' }}
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
             <form className="mb-3" onSubmit={handleSubmit}>
               
                <input
                 className='form-control'
                 type="text"
                 placeholder='Enter Your Name'
                 name="fullName"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.fullName}
                 
               />
               <label htmlFor="">Full Name <b className='text-danger'>*</b></label>
                 <input
               className='form-control'
                 type="tel"
                 pattern='[0-9]{10}'
                 placeholder='Enter Your Phone Number'
                 name="pnumber"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.pnumber}
                 
               />
               <label htmlFor="">Phone Number <b className='text-danger'>*</b></label>
               <input
               className='form-control'
                 type="email"
                 placeholder='Enter Your Email address'
                 name="email"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.email}
                 
               />
               <label>Email <b className='text-danger'>*</b></label>
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
               <label id='lab2'>Password <b className='text-danger'>*</b></label>
               {errors.password && touched.password && errors.password}

                 <input
               className='form-control'
                 type="text"
                 placeholder='Enter Your Company Name'
                 name="cname"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.cname}
                 
               />
                <label htmlFor="">Company Name <b className='text-danger'>*</b></label>
               <h5>Are You Agency ?</h5>
                 <div>
               <input
              type="radio"
              id="personal"
              name="accountType"
              value="Yes"
              onChange={handleChange}
              checked={values.accountType === "Yes"}
            />
            <label id="rlab" htmlFor="personal" className="ms-2">Yes</label>
            &nbsp;&nbsp;
            <input
              type="radio"
              id="business"
              name="accountType"
              value="no"
              onChange={handleChange}
              checked={values.accountType === "no"}
            />
            <label id="rlab" htmlFor="business" className="ms-2">No</label>
          </div>


               <button className="form-control btn mt-5"  type="submit" disabled={isSubmitting}>
                 Create Account
               </button>
             </form>
           )}
         </Formik>
        </div>
  )
}

export default Create