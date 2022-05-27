import React from 'react'
import "./AddUser.css"
const AddUser = () => {
  return (
    <div className='p-3 ' dir='rtl' >
         <div className="col-12">
          <div className="chart d-flex justify-content-center align-items-center flex-wrap chart-input">
            <div className="chartTitle w-100">افزودن اپراتور جدید</div>

            <div class="form-floating mb-3 mt-3  w-75 formLable" >
                 <input type="text" class="form-control"  placeholder="نام"/>
                 <label for="username" className='formLable'>نام</label>
            </div>
            <div class="form-floating mb-3 w-75">
                 <input type="text" class="form-control" id="userlastname" placeholder="نام خانوادگی"/>
                 <label for="userlastname">نام خانوادگی</label>
            </div>
            <div class="form-floating mb-3 w-75">
                 <input type="text" class="form-control" id="userphone" placeholder="شماره موبایل"/>
                 <label for="userphone">شماره موبایل</label>
            </div>
            <div class="form-floating mb-3 w-75">
                 <input type="text" class="form-control" id="userCode" placeholder="کد ملی"/>
                 <label for="userCode">کد ملی</label>
            </div>
            <button type="button" class="btn btn-secondary  w-75 mb-3">ثبت</button>
          </div>
        </div>
    </div>
  )
}

export default AddUser