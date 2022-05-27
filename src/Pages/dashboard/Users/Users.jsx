import React from "react";
import "../DashHome.css";
import {FaFemale, FaEllo,FaTencentWeibo,FaAllergies} from "react-icons/fa";
import { DataGrid } from '@mui/x-data-grid';


function Users() {
  const columns = [
    { field: 'id', headerName: 'ردیف', width: 90 },
    {
      field: 'opratorName',
      headerName: ' نام اپراتور',
      width: 150,
      editable: true,
    },
    {
      field: 'phoneNumber',
      headerName: 'شماره تلفن',
      width: 150,
      editable: true,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'nationalCode',
      headerName: 'کد ملی',
      width: 110,
      editable: true,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'disapble',
      headerName: 'عملیات',
      width: 110,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
    },
  ];

    const rows = [
      { id: "۱",opratorName: 'سارا', phoneNumber: "09334445566", nationalCode: "1234567890" },
      { id: "۲",opratorName: 'سارا', phoneNumber: "09334445566", nationalCode: "1234567890" },
      { id: "۳",opratorName: 'سارا', phoneNumber: "09334445566", nationalCode: "1234567890" },
      { id: "۴",opratorName: 'سارا', phoneNumber: "09334445566", nationalCode: "1234567890" },
      { id: "۵",opratorName: 'سارا', phoneNumber: "09334445566", nationalCode: "1234567890" },
      { id: "۶",opratorName: 'سارا', phoneNumber: "09334445566", nationalCode: "1234567890" },
      { id: "۷",opratorName: 'سارا', phoneNumber: "09334445566", nationalCode: "1234567890" },
      
    ];
  
  return (
    <div className="text-center dashHome">
      <div className="row p-0 m-0">
        <div className="col-12">
          <div className="chart">
            <div className="chartTitle w-100">لیست اپراتورها</div>
            <div style={{ height: 400, width: '60%', display:"flex", justifyContent:"center", margin:"2rem auto" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                hideFooterPagination={true}
                hideFooter={true}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Users;

// import React, { useState, useContext,useEffect } from "react";
// import { makeStyles } from "@mui/styles";
// import Paper from "@mui/material/Paper";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import Typography from '@mui/material/Typography';
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { useHistory } from "react-router-dom";
// import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import { Grid } from "@mui/material";
// import Container from "@mui/material/Container";
// // import EditIcon from "@material-ui/icons/Edit";
// // import DeleteIcon from "@material-ui/icons/Delete";
// import Avatar from "@mui/material/Avatar";
// import EditModal from "../../../modals/EditModal";

// const theme = createMuiTheme({
//   direction: "rtl",
// });

// const columns = [
//   {
//     id: "image",
//     label: "تصویر",
//     minWidth: 170,
//     align: "right",
//     format: "img",
//   },
//   {
//     id: "title",
//     label: "نام کالا",
//     minWidth: 170,
//     align: "right",
//   },
//   {
//     id: "category",
//     label: "دسته بندی",
//     minWidth: 170,
//     align: "right",
//   },
//   {
//     id: "edit",
//     minWidth: 100,
//     align: "right",
//     format: "edit",
//   },
// ];

// const useStyles = makeStyles({
//   root: {
//     width: "80%",
//     padding: "auto",
//     margin: " auto",
//     marginTop: "20px",
//   },
//   image: {
//     width: theme.spacing(15),
//     height: theme.spacing(20),
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

// function Users({ data,setData, ...props}) {
//   const classes = useStyles();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [open, setOpen] = React.useState(false);
//   const [openEdit, setOpenEdit] = React.useState(false);
//   const [product, setProduct] = React.useState();


//   //pagination   ***************************************************************
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   // useEffect(() => {
//   //   const getProducts= async()=>{
//   //     setData(data)
//   //   }
//   //   getProducts()
//   // }, [])

//   //open modal for add new product ***************************************************************
//   const handleClick = () => {
//     setOpen(true);
//   };

//   //edit product ***************************************************************
//   function handleEditModal(e) {
//     setOpenEdit(true);
//     console.log(e);
//     // console.log(e.target.id);
//     // const id= e.target.id
//     // setData(data?.find(item=>item.id === e))
//   }

//   //add a new product ***************************************************************
//   const addProduct = async (product) => {
//     try {
//       const res = await fetch("http://localhost:8000/products", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(product),
//       });
//       const newData = await res.json();
//       setData([...data, newData]);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//     //delete a product ***************************************************************
//   const handleDelet =async (proId) => {
//    const res= await fetch(`http://localhost:8000/products/${proId}` ,{
//       method: "DELETE"
//     })
//     .then((res)=> setData(data.filter((product) => product.id !== proId)))
//    console.log(proId);
//   //  const filterData=await data.filter((product) => product.id !== proId)
//   //  setData(filterData);
//  };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth="md">
//         <Grid
//           container
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//           dir="rtl"
//           className={classes.root}
//         >
//           <Grid item xs={9}>
//             <Typography variant="h6">مدیریت کالاها</Typography>
//           </Grid>
//           <Grid item xs={3}>
//             <Button
//               variant="contained"
//               color="primary"
//               href="#contained-buttons"
//               onClick={handleClick}
//             >
//               افزودن کالا
//             </Button>
//           </Grid>
//           <Grid item xs={12} className={classes.root}>
//             <Paper>
//               <TableContainer className={classes.container} dir="rtl">
//                 <Table stickyHeader aria-label="sticky table">
//                   <TableHead>
//                     <TableRow>
//                       {columns.map((column) => (
//                         <TableCell
//                           key={column.id}
//                           align={column.align}
//                           style={{ minWidth: column.minWidth }}
//                         >
//                           {column.label}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {data
//                       ?.slice(
//                         page * rowsPerPage,
//                         page * rowsPerPage + rowsPerPage
//                       )
//                       ?.map((datas) => {
//                         return (
//                           <TableRow
//                             hover
//                             role="checkbox"
//                             tabIndex={-1}
//                             key={datas.code}
//                             id={datas.id}
//                           >
//                             <TableCell
//                               id={datas.id}
//                               key={datas.id}
//                               align="right"
//                             >
//                               <Avatar
//                                 src={datas.image}
//                                 variant="square"
//                                 className={classes.image}
//                               />
//                             </TableCell>

//                             <TableCell
//                               id={datas.id}
//                               key={datas.id}
//                               align="right"
//                             >
//                               {datas.title}
//                             </TableCell>
//                             <TableCell
//                               id={datas.id}
//                               key={datas.id}
//                               align="right"
//                             >
//                               {datas.category}
//                             </TableCell>
//                             <TableCell
//                               id={datas.id}
//                               key={datas.id}
//                               align="right"
//                             >
//                               <div onClick={(e) => handleEditModal(datas.id)} id={datas.id}>
//                                 {/* <EditIcon  /> */}
//                               </div>

//                               <div onClick={(e) => handleDelet(datas.id)} id={datas.id}>
//                               {/* <DeleteIcon /> */}
//                               </div>
//                             </TableCell>
//                           </TableRow>
//                         );
//                       })}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <TablePagination
//                 rowsPerPageOptions={[10, 25, 100]}
//                 component="div"
//                 direction="ltr"
//                 count={data.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onChangePage={handleChangePage}
//                 onChangeRowsPerPage={handleChangeRowsPerPage}
//               />
//               <EditModal
//                 openEdit={openEdit}
//                 setOpenEdit={setOpenEdit}
//                 setData={setData}
//                 data={data}
//               />
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default Users;
