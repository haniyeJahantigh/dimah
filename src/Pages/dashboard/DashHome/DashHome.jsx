import React from "react";
import "../DashHome.css";
import {FaFemale, FaEllo,FaTencentWeibo,FaAllergies} from "react-icons/fa";
import Cards from "./Components/Cards";
import { DataGrid } from '@mui/x-data-grid';


function DashHome() {
  const columns = [
    { field: 'id', headerName: 'ردیف', width: 90 },
    {
      field: 'opratorName',
      headerName: ' نام اپراتور',
      width: 150,
      editable: true,
    },
    {
      field: 'customerName',
      headerName: 'نام مراجعه کننده',
      width: 150,
      editable: true,
    },
    {
      field: 'kind',
      headerName: 'نوع لیزر',
      width: 110,
      editable: true,
    },
    {
      field: 'areas',
      headerName: 'نواحی بدن',
      width: 110,
      editable: true,
    },
    {
      field: 'meetingNumber',
      headerName: 'شماره جلسه',
      type: 'number',
      width: 90,
      editable: true,
    },
    {
      field: 'meetingDate',
      headerName: 'تاریخ جلسه',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'cost',
      headerName: 'هزینه ',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'time',
      headerName: 'ساعت ',
      type: 'number',
      width: 20,
      editable: true,
    },
    {
      field: 'nationalCode',
      headerName: 'کدملی ',
      type: 'number',
      width: 20,
      editable: true,
    },
    {
      field: 'sexual',
      headerName: 'جنسیت ',
      type: 'text',
      width: 20,
      editable: true,
    },
  ];

    const rows = [
      { id: "۱", customerName: 'سارایی', opratorName: 'سارا', kind: "جوانسازی",areas:"بدن" ,meetingNumber:"۴",meetingDate:"۱۴۰۱.۳.۳",  cost:"۳۵۰۰۰۰", time: "12"  },
      { id: "۲", customerName: 'سارایی', opratorName: 'سارا', kind: "جوانسازی",areas:"بدن" ,meetingNumber:"۴",meetingDate:"۱۴۰۱.۳.۳",  cost:"۳۵۰۰۰۰" },
      { id: "۳", customerName: 'سارایی', opratorName: 'سارا', kind: "جوانسازی",areas:"بدن" ,meetingNumber:"۴",meetingDate:"۱۴۰۱.۳.۳",  cost:"۳۵۰۰۰۰" },
      { id: "۴", customerName: 'سارایی', opratorName: 'سارا', kind: "جوانسازی",areas:"بدن" ,meetingNumber:"۴",meetingDate:"۱۴۰۱.۳.۳",  cost:"۳۵۰۰۰۰" },
      { id: "۵", customerName: 'سارایی', opratorName: 'سارا', kind: "جوانسازی",areas:"بدن" ,meetingNumber:"۴",meetingDate:"۱۴۰۱.۳.۳",  cost:"۳۵۰۰۰۰" },
      { id: "۶", customerName: 'سارایی', opratorName: 'سارا', kind: "جوانسازی",areas:"بدن" ,meetingNumber:"۴",meetingDate:"۱۴۰۱.۳.۳",  cost:"۳۵۰۰۰۰" },
      { id: "۷", customerName: 'سارایی', opratorName: 'سارا', kind: "جوانسازی",areas:"بدن" ,meetingNumber:"۴",meetingDate:"۱۴۰۱.۳.۳",  cost:"۳۵۰۰۰۰" },
      
    ];
  
  return (
    <div className="text-center dashHome">
      <div className="row p-0 m-0">
        <div className="col-3">
          <Cards
            icon={<FaEllo className="dashHomeCardIcon" />}
            title="جوانسازی"
            info="25"
            No="مورد"
          />
        </div>
        <div className="col-3">
          <Cards
            icon={<FaTencentWeibo className="dashHomeCardIcon" />}
            title="موهای زائد"
            info="1520"
            No="مورد"
          />
        </div>
        <div className="col-3">
          <Cards
            icon={<FaAllergies className="dashHomeCardIcon" />}
            title=" رفع تتو"
            info="2000"
            No="مورد"
          />
        </div>
        <div className="col-3">
          <Cards
            icon={<FaFemale className="dashHomeCardIcon" />}
            title=" زنان"
            info="300"
            No="مورد"
          />
        </div>
        <div className="col-12">
          <div className="chart">
            <div className="chartTitle w-100">لیست مشتریان</div>
            <div style={{ height: 400,width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination={true}
        hideFooter={true}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default DashHome;