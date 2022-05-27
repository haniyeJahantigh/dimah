import React from "react";
import "./Form.css";
import logo from "../../assets/img/dimah.jpeg";
import {
  TextField,
  Box,
  FormControl,
  FilledInput,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormGroup,
  Button,
  Autocomplete,
  Stack,
  Grid,
  Typography,
} from "@mui/material";
import AdapterJalali from "@date-io/date-fns-jalali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { men } from "../../data/areaData.js";
import { women } from "../../data/areaData.js";
import { styled } from "@mui/material/styles";

function Form(props) {
  const [value, setValue] = React.useState(new Date());
  const [kind, setKind] = React.useState("");
  const [sexual, setSexual] = React.useState("");

  const spotSize = [
    { title: "single" },
    { title: 6 },
    { title: 8 },
    { title: 10 },
    { title: 12 },
    { title: 15 },
    { title: 18 },
    { title: 20 },
    { title: 24 },
    { title: 25 },
    { title: 30 },
  ];
  const defaultSizeProps = {
    options: spotSize,
    getOptionLabel: (option) => option.title,
  };
  // ================= Power Fluence options ===========
  const powerFluenceOpt = [
    { title: 6 },
    { title: 7 },
    { title: 8 },
    { title: 9 },
    { title: 10 },
    { title: 12 },
    { title: 14 },
    { title: 16 },
    { title: 18 },
  ];
  const defaultPowerFluenceOpt = {
    options: powerFluenceOpt,
    getOptionLabel: (option) => option.title,
  };
  // ================= P.W options ===========
  const PWOpt = [{ title: 3 }, { title: 5 }, { title: 10 }];
  const defaultPWOpt = {
    options: PWOpt,
    getOptionLabel: (option) => option.title,
  };
  // ================= P.R options ===========
  const PROpt = [
    { title: "single" },
    { title: 0.5 },
    { title: 1 },
    { title: 1.5 },
    { title: 2 },
    { title: 2.5 },
    { title: 3 },
  ];
  const defaultPROpt = {
    options: PROpt,
    getOptionLabel: (option) => option.title,
  };

  const handleChange = (event) => {
    setKind(event.target.value);
  };
  const handleSexualChange = (event) => {
    setSexual(event.target.value);
  };
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <div className="w-100 d-flex justify-content-center align-items-center flex-wrap ">
          <span className="brandName form-title w-100 text-center mt-5 h2">
            مرکز لیزر دیماه
          </span>
          <img src={logo} width="80px" className="logo " />
        </div>
      </Grid>
      <Grid item md={2} xs={0} />
      <Grid item md={8} xs={12} sx={{ mb: 5, mt: 5 }}>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", direction: "rtl" }}
          className="form-main"
        >
          <Grid container xs={12} spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                <InputLabel htmlFor="filled-adornment-customerName">
                  نام مشتری
                </InputLabel>
                <FilledInput
                  id="filled-adornment-customerName"
                  type={"text"}
                  label="customerName"
                />
              </FormControl>
            </Grid>

            {/* ====================================== =================== ===================  */}
            <Grid item xs={12} md={6}>
              <FormControl sx={{ m: 1 }} variant="filled" fullWidth>
                <InputLabel htmlFor="filled-user-lastname">
                  نام خانوادگی مشتری
                </InputLabel>
                <FilledInput
                  id="filled-user-lastname"
                  type={"text"}
                  label="lastname"
                />
              </FormControl>
            </Grid>
            {/* ====================================== =================== ===================  */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="filled-user-customerId">کد ملی</InputLabel>
                <FilledInput
                  id="filled-user-customerId"
                  type={"text"}
                  label="customerId"
                />
              </FormControl>
            </Grid>
            {/* ====================================== =================== ===================  */}
            <Grid item xs={12} md={6}>
              <FormControl
                sx={{
                  m: 1,
                  direction: "ltr",
                  bgcolor: "rgb(240,240,240)",
                }}
                variant="filled"
                fullWidth
              >
                <LocalizationProvider dateAdapter={AdapterJalali}>
                  <DatePicker
                    label="تاریخ مراجعه"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            {/* ====================================== =================== ===================  */}
            <Grid item xs={12}>
              <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                <InputLabel htmlFor="filled-user-time">ساعت مراجعه</InputLabel>
                <FilledInput id="filled-user-time" type={"hour"} label="time" />
              </FormControl>
            </Grid>
            {/* ====================================== =================== ===================  */}
            <Grid item xs={12}>
              <FormControl
                sx={{
                  m: 1,
                  bgcolor: "rgb(240,240,240)",
                  borderRadius: "3px 3px 0 0",
                  borderBottom: "0.75px solid black",
                }}
                fullWidth
              >
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ mr: 2 }}
                >
                  جنسیت
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="زن"
                    onChange={handleSexualChange}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="مرد"
                    onChange={handleSexualChange}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* ====================================== =================== ===================  */}
            {sexual == "female" ? (
              <>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                      borderBottom: "0.75px solid black",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ mr: 2 }}
                    >
                      {" "}
                      نواحی بدن
                    </FormLabel>
                    <FormGroup fullWidth row>
                      <Grid container xs={12}>
                        {women?.map((item) => (
                          <Grid item md={3} xs={6}>
                            <FormControlLabel
                              control={<Checkbox />}
                              label={item.name}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </FormGroup>
                  </FormControl>
                </Grid>
              </>
            ) : sexual == "male" ? (
              <>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                      borderBottom: "0.75px solid black",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ mr: 2 }}
                    >
                      {" "}
                      نواحی بدن
                    </FormLabel>
                    <FormGroup fullWidth row>
                      <Grid container xs={12}>
                        {men?.map((item) => (
                          <Grid item md={3} xs={6}>
                            <FormControlLabel
                              control={<Checkbox />}
                              label={item.name}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </FormGroup>
                  </FormControl>
                </Grid>
              </>
            ) : null}
            {/* ====================================== =================== ===================  */}
            <Grid item xs={12}>
              <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                <InputLabel
                  htmlFor="filled-user-lastname"
                  sx={{ fontFamily: "Yekan" }}
                >
                  شماره جلسه
                </InputLabel>
                <FilledInput
                  id="filled-user-lastname"
                  type={"text"}
                  label="Password"
                  sx={{ fontFamily: "Yekan" }}
                />
              </FormControl>
            </Grid>
            {/* ====================================== =================== ===================  */}
            <Grid item xs={12}>
              <FormControl
                fullWidth
                sx={{
                  m: 1,
                  bgcolor: "rgb(240,240,240)",
                  borderRadius: "3px 3px 0 0",
                  borderBottom: "0.75px solid black",
                }}
              >
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ fontFamily: "Yekan", mr: 2 }}
                >
                  نوع لیزر*
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="javansazi"
                    control={<Radio />}
                    label="جوانسازی"
                    sx={{ fontFamily: "Yekan" }}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="moo-zaed"
                    control={<Radio />}
                    label="موهای زائد"
                    sx={{ fontFamily: "Yekan" }}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="tatoo"
                    control={<Radio />}
                    label="رفع تتو"
                    sx={{ fontFamily: "Yekan" }}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="زنان"
                    sx={{ fontFamily: "Yekan" }}
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* ============================================================================  */}
            {kind == "javansazi" ? (
              <>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                      borderBottom: "0.75px solid black",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ mr: 2 }}
                    >
                      نوع لیزر جوانسازی
                    </FormLabel>
                    <FormGroup fullWidth row>
                      <Grid container xs={12}>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="CO2"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel control={<Checkbox />} label="RF" />
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </FormControl>
                </Grid>
                {/* ***************** */}
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-adornment-power">
                      Power(حداقل :۱ حداکثر:۱۰)
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-power"
                      type={"text"}
                      label="power"
                    />
                  </FormControl>
                </Grid>
                {/* ***************** */}
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-user-dwellTime">
                      Dwell Time(حداقل :100 حداکثر:1000)
                    </InputLabel>
                    <FilledInput
                      id="filled-user-dwellTime"
                      type={"text"}
                      label="dwellTime"
                    />
                  </FormControl>
                </Grid>
                {/* ***************** */}
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-adornment-spacing">
                      Spacing(حداقل :100 حداکثر:1000)
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-spacing"
                      type={"text"}
                      label="spacing"
                    />
                  </FormControl>
                </Grid>
                {/* ***************** */}
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-user-stak">
                      Stak(حداقل :1 حداکثر:6)
                    </InputLabel>
                    <FilledInput
                      id="filled-user-stak"
                      type={"text"}
                      label="stak"
                    />
                  </FormControl>
                </Grid>
                {/* ***************** */}
                <Grid item xs={12}>
                  <InputLabel htmlFor="disable-clearable" sx={{ mr: 2 }}>
                    Spot Size
                  </InputLabel>
                  <Autocomplete
                    sx={{
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                      m: 1,
                    }}
                    fullWidth
                    {...defaultSizeProps}
                    id="disable-clearable"
                    clearOnEscape
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="برای انتخاب کلیک کنید"
                        sx={{ direction: "ltr" }}
                        variant="standard"
                      />
                    )}
                  />
                </Grid>
              </>
            ) : //================================== MOO ZAED ========================================================
            kind == "moo-zaed" ? (
              <>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                      borderBottom: "0.75px solid black",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ fontFamily: "Yekan", mr: 2 }}
                    >
                      نوع لیزر رفع موهای زائد
                    </FormLabel>
                    <FormGroup fullWidth row>
                      <Grid container xs={12}>
                        <Grid item xs={12} sm={6} lg={3}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="ALEX 755"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="ND-YAG 1064"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="DIOD 810"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="IPL 580"
                          />
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </FormControl>
                </Grid>

                {/* ***************** */}
                <Grid item xs={12} md={6}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      p: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                    }}
                  >
                    <InputLabel htmlFor="disable-clearable">
                      Power Fluence
                    </InputLabel>
                    <Autocomplete
                      {...defaultPowerFluenceOpt}
                      id="disable-clearable"
                      clearOnEscape
                      renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                      )}
                    />
                  </FormControl>
                </Grid>
                {/* ***************** */}
                <Grid item xs={12} md={6}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      p: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                    }}
                  >
                    <InputLabel htmlFor="disable-clearable">P.W</InputLabel>
                    <Autocomplete
                      {...defaultPWOpt}
                      id="disable-clearable"
                      clearOnEscape
                      renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                      )}
                    />
                  </FormControl>
                </Grid>
                {/* ***************** */}
                <Grid item xs={12} md={6}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      p: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                    }}
                  >
                    <InputLabel htmlFor="disable-clearable">
                      Spot Size
                    </InputLabel>
                    <Autocomplete
                      {...defaultSizeProps}
                      id="disable-clearable"
                      clearOnEscape
                      renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                      )}
                    />
                  </FormControl>
                </Grid>
                {/* ***************** */}
                <Grid item xs={12} md={6}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      p: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                    }}
                  >
                    <InputLabel htmlFor="disable-clearable">P.R</InputLabel>
                    <Autocomplete
                      {...defaultPROpt}
                      id="disable-clearable"
                      clearOnEscape
                      renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                      )}
                    />
                  </FormControl>
                </Grid>
              </>
            ) : //================================== TATOO ========================================================
            kind == "tatoo" ? (
              <>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                      borderBottom: "0.75px solid black",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ fontFamily: "Yekan", mr: 2 }}
                    >
                      نوع لیزر رفع تتو
                    </FormLabel>
                    <FormGroup fullWidth row>
                      <Grid container xs={12}>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="QSWITCH ND-YAG"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="QSWITCH KTP"
                          />
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-adornment-energy">
                      Energy(حداقل :800 حداکثر:1000)
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-energy"
                      type={"text"}
                      label="energy"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      p: 1.5,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                    }}
                  >
                    <InputLabel htmlFor="disable-clearable">
                      Spot Size
                    </InputLabel>
                    <Autocomplete
                      {...defaultSizeProps}
                      id="disable-clearable"
                      clearOnEscape
                      renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                    <InputLabel
                      htmlFor="filled-adornment-password"
                      sx={{ fontFamily: "Yekan" }}
                    >
                      HZ(حداقل :1 حداکثر:6)
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-password"
                      type={"text"}
                      label="Password"
                      sx={{ fontFamily: "Yekan" }}
                    />
                  </FormControl>
                </Grid>
              </>
            ) : kind == "female" ? (
              <>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    sx={{
                      m: 1,
                      bgcolor: "rgb(240,240,240)",
                      borderRadius: "3px 3px 0 0",
                      borderBottom: "0.75px solid black",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ fontFamily: "Yekan", mr: 2 }}
                    >
                      نوع لیزر زنان
                    </FormLabel>
                    <FormGroup fullWidth row>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="CO2"
                        sx={{ fontFamily: "Yekan" }}
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-adornment-power">
                      Power(حداقل :۱ حداکثر:۱۰)
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-power"
                      type={"text"}
                      label="power"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <InputLabel htmlFor="filled-user-dwellTime">
                      Dwell Time(حداقل :100 حداکثر:1000)
                    </InputLabel>
                    <FilledInput
                      id="filled-user-dwellTime"
                      type={"text"}
                      label="dwellTime"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl sx={{ m: 1 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-adornment-spacing">
                      Spacing(حداقل :100 حداکثر:1000)
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-spacing"
                      type={"text"}
                      label="spacing"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl  sx={{ m: 1 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-user-stak">
                      Stak(حداقل :1 حداکثر:6)
                    </InputLabel>
                    <FilledInput
                      id="filled-user-stak"
                      type={"text"}
                      label="stak"
                    />
                  </FormControl>
                </Grid>

                <FormControl
                  fullWidth
                  sx={{
                    m: 1,
                    p: 1,
                    bgcolor: "rgb(240,240,240)",
                    borderRadius: "3px 3px 0 0",
                  }}
                >
                  <InputLabel htmlFor="disable-clearable">Spot Size</InputLabel>
                  <Autocomplete
                    //  sx={{ p:1}}
                    {...defaultSizeProps}
                    id="disable-clearable"
                    clearOnEscape
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{ fontFamily: "Yekan" }}
                        variant="standard"
                      />
                    )}
                  />
                </FormControl>
              </>
            ) : null}
            {/* ====================================== =================== ===================  */}
            <FormControl sx={{ m: 1 }} fullWidth variant="filled">
              <InputLabel
                htmlFor="filled-user-lastname"
                sx={{ fontFamily: "Yekan" }}
              >
                هزینه جلسه
              </InputLabel>
              <FilledInput
                id="filled-user-lastname"
                type={"text"}
                label="Password"
                sx={{ fontFamily: "Yekan" }}
              />
            </FormControl>
            {/* ====================================== =================== ===================  */}
            <Button
              variant="contained"
              fullWidth
              sx={{ bgcolor: "rgb(191, 141, 56)", m: 1, fontFamily: "Yekan" }}
            >
              ثبت
            </Button>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={2} xs={0} />
    </Grid>
  );
}

export default Form;
