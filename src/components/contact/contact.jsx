import React, { useState } from "react";
import Style from "./Contact.module.css";
import { useFormik } from "formik";
export default function Contact() {
  function validateForm(values){
    let errors = {}
    // if vlaues.name is `` empty string this is error
    if(!values.name){
      errors.name = `name is required`
    }else if(values.name.length < 5){
      errors.name = `name should more than 5 letter`
    }
    // if age is empth or 0 the error will build
    if(!values.age){
      errors.age = 'age is required'
    } 
    if(!values.email){
       errors.email = 'email is required'
    }else if(!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gim.test(values.email)){
      errors.email = `not valid email`
    }
    if(!values.password){
      errors.password = 'password is required'
      // password must start @ or  # the capital letter then a-z 4 or more letter
   }else if(!/^(@|#)[A-Z][A-Z a-z]{4,}$/gm.test(values.password)){
     errors.password = `not valid password`
   }
   console.log(formik.errors)
    return errors
  }
  let formik = useFormik({
    initialValues:{
      name: '',
      age: '',
      name: '',
      email: '',
      password: '',
    },
    onSubmit: function(values){
      console.log(values);

    },
    validate: validateForm
  })

  return (
    <>
      <main className="bg-scolor  text-white items-center justify-center h-screen flex flex-col gap-5">
        <h1 className="text-4xl uppercase font-bold">Contact us</h1>
        <div className="flex gap-5 items-center">
          <span className="w-24 h-1 bg-white"></span>
          <i className="fa-solid fa-star text-white"></i>
          <span className="w-24 h-1 bg-white"></span>
        </div>
        <form action="" className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
           <input className="p-2 md:pr-60 rounded-md text-black outline-none " type="text" placeholder="UserName" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
           {formik.errors.name && formik.touched.name ? <div className="text-red-800 "> * {formik.errors.name}</div>:""}
           <input className="p-2 rounded-md text-black outline-none " type="number" placeholder="Your Age"  name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
           {formik.errors.age && formik.touched.age ? <div className="text-red-800 "> * {formik.errors.age}</div>:""}
           <input className="p-2 rounded-md text-black outline-none " type="email" placeholder="Your Email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
           {formik.errors.email && formik.touched.email ? <div className="text-red-800 "> * {formik.errors.email}</div>:""}
           <input className="p-2 rounded-md text-black outline-none " type="password" placeholder="Your Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
           {formik.errors.password && formik.touched.password ? <div className="text-red-800 "> * {formik.errors.password}</div>:""}
           <button type="submit"  className="capitalize bg-slate-500 text-white self-start px-4 py-2 rounded-md"  >send messege</button>
        </form>
      </main>
    </>
  );
}
