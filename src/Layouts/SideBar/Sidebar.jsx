import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/dimah.jpeg";
import {FaCloudscale,FaUserPlus,FaIdCard} from 'react-icons/fa'

function Sidebar(props) {
  return (
    <div className="h-100 sidebar  flex-wrap">
      <div className="LogoPosition d-flex justify-content-center align-items-center flex-wrap mt-2">
        <img src={logo} width="60px" className="logo" />
        <span className="brandName text-light w-100 text-center mt-2">مرکز تخصصی دیماه</span>
      </div>
      <div className="Menu">
        <ul>
          <NavLink className="li" exact to="/dashboard" activeClassName="activeMenu">
            <FaCloudscale className="sidebarMenuIcon"/> داشبورد
          </NavLink>
          <NavLink className="li" exact to="/dashboard/adduser" activeClassName="activeMenu">
            <FaUserPlus className="sidebarMenuIcon"/> ایجاد اپراتور
          </NavLink>
          <NavLink className="li" exact to="/dashboard/users" activeClassName="activeMenu">
            <FaIdCard className="sidebarMenuIcon"/> نمایش اپراتورها
          </NavLink>
  
        </ul>
      </div>
      <div className="support">
        <p>
          برای دریافت مشاوره و راهنمایی و رفع مشکلات احتمالی در سیستم نرم افزار
          لطفا با شماره های زیر تماس بگیرید : <br></br>
          09185624908<br></br>
          09354809610
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
