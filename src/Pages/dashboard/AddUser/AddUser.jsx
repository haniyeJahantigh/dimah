import React from 'react'
import { useFormik } from 'formik';
import axios from "axios";
import "./AddUser.css"

const AddUser = () => {
     const formik = useFormik({
          initialValues: {
               username:"",
               password:"",
               firstName:"",
               lastName:"",
               phoneNumber:"",
               nationalcode:""
           },
          onSubmit: (values , { resetForm })=>{
             axios
            .post("http://188.121.120.127/admin/operator", {
              values
            },{
              headers:{
                "authorization": localStorage.getItem("token")
              }
            })
            resetForm();
          },
        });
  return (
     <form onSubmit={formik.handleSubmit}>

    <div className='p-3 ' dir='rtl' >
         <div className="col-12">
          <div className="chart d-flex justify-content-center align-items-center flex-wrap chart-input">
            <div className="chartTitle w-100">افزودن اپراتور جدید</div>

            <div class="form-floating mb-3 mt-3  w-75 formLable" >
                 <input type="text" id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} class="form-control"  placeholder="نام"/>
                 <label for="firstName" className='formLable'>نام</label>
            </div>
            <div class="form-floating mb-3 w-75">
                 <input type="text" class="form-control" id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} placeholder="نام خانوادگی"/>
                 <label for="lastName">نام خانوادگی</label>
            </div>
            <div class="form-floating mb-3 w-75">
                 <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" onChange={formik.handleChange} value={formik.values.phoneNumber} placeholder="شماره موبایل"/>
                 <label for="phoneNumber">شماره موبایل</label>
            </div>
            <div class="form-floating mb-3 w-75">
                 <input type="text" class="form-control"id="nationalcode" name="nationalcode" onChange={formik.handleChange} value={formik.values.nationalcode} placeholder="کد ملی"/>
                 <label for="nationalcode">کد ملی</label>
            </div>
            <div class="form-floating mb-3 w-75">
                 <input type="text" class="form-control"id="username" name="username" onChange={formik.handleChange} value={formik.values.username} placeholder="کد ملی"/>
                 <label for="username">نام کاربری</label>
            </div>
            <div class="form-floating mb-3 w-75">
                 <input type="text" class="form-control"id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="کد ملی"/>
                 <label for="password">رمز عبور</label>
            </div>
            <button type="submit" class="btn btn-secondary  w-75 mb-3">ثبت</button>
          </div>
        </div>
    </div>
    </form>
  )
}

export default AddUser