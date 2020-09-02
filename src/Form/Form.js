import 'date-fns'
import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Formik } from 'formik'
import * as yup from 'yup'
import Switch from '@material-ui/core/Switch'

import {
  employeenumber,
  firstname,
  middlename,
  lastName,
  emailAddress,
  phone1,
  phone1des,
  phone2,
  phone2des,
  hireDate,
  birthDate,
  gender,
  securityLevel,
  depositAccountNumber,
  depositRoutingNumber,
  depositFinancialName,
  vacationDateFirstEligble,
  address1,
  address2,
  city,
  state,
  zip,
  physicaladdress1,
  physicaladdress2,
  physicalCity,
  physicalState,
  physicalZip
} from './data'
const mpSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  empnumber: yup
    .number()
    .required('Employee Number is required')
    .typeError('Employee Number must be a number'),
  middlename: yup.string().typeError('Must be a String'),
  email: yup
    .string()
    .email()
    .required('Email is required'),
  phone1: yup
    .number()
    .required('Number is required')
    .typeError('Must contains only numbers'),

  phone2: yup
    .number()
    .required('Number is required')
    .typeError('Must contains only numbers'),
  seclevel: yup
    .number()
    .required('Security Level is required')
    .typeError('Must be a number'),
  accountnum: yup
    .number()
    .required('Account Number is required')
    .typeError('Must be a number'),
  routingnum: yup
    .number()
    .required('Routing Number is required')
    .typeError('Must be a number'),
  financialname: yup.string().required('Financial Name is required'),
  address1: yup.string().required('Address1 is required'),
  address2: yup.string(),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zip: yup
    .number()
    .required('Zip is required')
    .typeError('Must contains Numbers Only'),
  paddress1: yup.string().required('Address1 is required'),
  paddress2: yup.string(),
  pcity: yup.string().required('City is required'),
  pstate: yup.string().required('State is required'),
  pzip: yup
    .number()
    .required('Zip is required')
    .typeError('Must contains Numbers Only')
})

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Form() {
  const classes = useStyles()
  const [phonedes1, setPhonedes1] = useState(phone1des)
  const [phonedes2, setPhonedes2] = useState(phone2des)
  const [view, setView] = useState(true)
  console.log(typeof firstname)
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Formik
          initialValues={{
            empnumber: employeenumber,
            firstName: firstname,
            middlename: middlename,
            lastName: lastName,
            email: emailAddress,
            phone1: phone1,
            phone2: phone2,
            seclevel: securityLevel,
            accountnum: depositAccountNumber,
            routingnum: depositRoutingNumber,
            financialname: depositFinancialName,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
            paddress1: physicaladdress1,
            paddress2: physicaladdress2,
            pcity: physicalCity,
            pstate: physicalState,
            pzip: physicalZip
          }}
          validationSchema={mpSchema}
          onSubmit={(values, actions) => {
            console.log(values)
            const {
              empnumber,
              firstName,
              middlename,
              lastName,
              email,
              phone1,
              phone2,
              seclevel,
              accountnum,
              routingnum,
              financialname,
              address1,
              address2,
              city,
              state,
              zip,
              paddress1,
              paddress2,
              pcity,
              pstate,
              pzip
            } = values
            const myalert = `${empnumber},${firstName},${middlename},${lastName},${email},${phone1},${phonedes1},${phone2},${hireDate},${birthDate},${gender},${seclevel},${accountnum},${routingnum},${financialname},${vacationDateFirstEligble},${address1},${address2},${city},${state},${zip},${paddress1},${paddress2},${pcity},${pstate},${pzip},`
            window.alert(myalert)
          }}
        >
          {formikProps => (
            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Switch name='checkedB' color='primary' />}
                    label={view ? 'View Mode' : 'Edit Mode'}
                    onChange={() => setView(prevState => !prevState)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>EmployeeNumber</InputLabel>{' '}
                      <Typography>{formikProps.values.empnumber}</Typography>
                    </div>
                  ) : (
                    <TextField
                      disabled
                      autoComplete='Empnumber'
                      name='empnumber'
                      variant='outlined'
                      required
                      fullWidth
                      value={formikProps.values.empnumber}
                      label='Employee Number'
                      autoFocus
                      onChange={formikProps.handleChange('empnumber')}
                      onBlur={formikProps.handleBlur('empnumber')}
                      error={
                        formikProps.touched.empnumber &&
                        formikProps.errors.empnumber
                          ? true
                          : false
                      }
                      helperText={
                        formikProps.touched.empnumber &&
                        formikProps.errors.empnumber
                          ? formikProps.errors.empnumber
                          : null
                      }
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>FirstName</InputLabel>{' '}
                      <Typography>{formikProps.values.firstName}</Typography>
                    </div>
                  ) : (
                    <TextField
                      autoComplete='Fname'
                      name='firstname'
                      variant='outlined'
                      required
                      fullWidth
                      value={formikProps.values.firstName}
                      label='First Name'
                      autoFocus
                      onChange={formikProps.handleChange('firstName')}
                      onBlur={formikProps.handleBlur('firstName')}
                      error={
                        formikProps.touched.firstName &&
                        formikProps.errors.firstName
                          ? true
                          : false
                      }
                      helperText={
                        formikProps.touched.firstName &&
                        formikProps.errors.firstName
                          ? formikProps.errors.firstName
                          : null
                      }
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>MiddleName</InputLabel>
                      <Typography>{formikProps.values.middlename}</Typography>
                    </div>
                  ) : (
                    <TextField
                      autoComplete='Mname'
                      name='middlename'
                      variant='outlined'
                      fullWidth
                      value={formikProps.values.middlename}
                      label='Middle Name'
                      autoFocus
                      onChange={formikProps.handleChange('middlename')}
                      onBlur={formikProps.handleBlur('middlename')}
                      error={
                        formikProps.touched.middlename &&
                        formikProps.errors.middlename
                          ? true
                          : false
                      }
                      helperText={
                        formikProps.touched.middlename &&
                        formikProps.errors.middlename
                          ? formikProps.errors.middlename
                          : null
                      }
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>LastName</InputLabel>{' '}
                      <Typography>{formikProps.values.lastName}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      value={formikProps.values.lastName}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      label='Last Name'
                      name='lastName'
                      autoComplete='lname'
                      helperText={
                        formikProps.touched.lastName &&
                        formikProps.errors.lastName
                          ? formikProps.errors.lastName
                          : null
                      }
                      error={
                        formikProps.touched.lastName &&
                        formikProps.errors.lastName
                          ? true
                          : false
                      }
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Email</InputLabel>{' '}
                      <Typography>{formikProps.values.email}</Typography>
                    </div>
                  ) : (
                    <TextField
                      autoComplete='eaddress'
                      name='email'
                      variant='outlined'
                      required
                      fullWidth
                      value={formikProps.values.email}
                      label='Email Address'
                      autoFocus
                      onChange={formikProps.handleChange('email')}
                      onBlur={formikProps.handleBlur('email')}
                      error={
                        formikProps.touched.email && formikProps.errors.email
                          ? true
                          : false
                      }
                      helperText={
                        formikProps.touched.email && formikProps.errors.email
                          ? formikProps.errors.email
                          : null
                      }
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Phone 1</InputLabel>{' '}
                      <Typography>{formikProps.values.phone1}</Typography>
                    </div>
                  ) : (
                    <TextField
                      autoComplete='phone1'
                      name='phone1'
                      variant='outlined'
                      required
                      fullWidth
                      value={formikProps.values.phone1}
                      label='Phone 1'
                      autoFocus
                      onChange={formikProps.handleChange('phone1')}
                      onBlur={formikProps.handleBlur('phone1')}
                      error={
                        formikProps.touched.phone1 && formikProps.errors.phone1
                          ? true
                          : false
                      }
                      helperText={
                        formikProps.touched.phone1 && formikProps.errors.phone1
                          ? formikProps.errors.phone1
                          : null
                      }
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Phone1 Description</InputLabel>{' '}
                      <Typography>{phone1des}</Typography>
                    </div>
                  ) : (
                    <div>
                      <InputLabel htmlFor='uncontrolled-native' required>
                        Phone1 Description
                      </InputLabel>
                      <NativeSelect
                        onChange={e => {
                          setPhonedes1(e.target.value)
                        }}
                        value={phonedes1}
                        inputProps={{
                          name: 'name',
                          id: 'uncontrolled-native'
                        }}
                        fullWidth
                      >
                        {[
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          7,
                          8,
                          9,
                          10,
                          11,
                          12,
                          13,
                          14,
                          15,
                          16,
                          17,
                          18,
                          19,
                          20
                        ].map((val, i) => (
                          <option value={val} key={i}>
                            {val}
                          </option>
                        ))}
                      </NativeSelect>
                    </div>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Phone 2</InputLabel>{' '}
                      <Typography>{formikProps.values.phone2}</Typography>
                    </div>
                  ) : (
                    <TextField
                      autoComplete='phone2'
                      name='phone2'
                      variant='outlined'
                      required
                      fullWidth
                      value={formikProps.values.phone2}
                      label='Phone 2'
                      autoFocus
                      onChange={formikProps.handleChange('phone2')}
                      onBlur={formikProps.handleBlur('phone2')}
                      error={
                        formikProps.touched.phone2 && formikProps.errors.phone2
                          ? true
                          : false
                      }
                      helperText={
                        formikProps.touched.phone2 && formikProps.errors.phone2
                          ? formikProps.errors.phone2
                          : null
                      }
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Phone 2</InputLabel>{' '}
                      <Typography>{formikProps.values.phone2}</Typography>
                    </div>
                  ) : (
                    <div>
                      <InputLabel htmlFor='uncontrolled-native' required>
                        Phone2 Description
                      </InputLabel>
                      <NativeSelect
                        onChange={e => {
                          setPhonedes2(e.target.value)
                        }}
                        value={phonedes2}
                        inputProps={{
                          name: 'name',
                          id: 'uncontrolled-native'
                        }}
                        fullWidth
                      >
                        {[
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          7,
                          8,
                          9,
                          10,
                          11,
                          12,
                          13,
                          14,
                          15,
                          16,
                          17,
                          18,
                          19,
                          20
                        ].map((val, i) => (
                          <option value={val} key={i}>
                            {val}
                          </option>
                        ))}
                      </NativeSelect>
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Hire Date</InputLabel>{' '}
                      <Typography>{hireDate}</Typography>
                    </div>
                  ) : (
                    <TextField
                      disabled
                      name='hdate'
                      label='Hire Date'
                      type='date'
                      required
                      fullWidth
                      value={hireDate}
                      defaultValue={hireDate}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Birth Date</InputLabel>{' '}
                      <Typography>{birthDate}</Typography>
                    </div>
                  ) : (
                    <TextField
                      disabled
                      name='bdate'
                      label='BirthDate'
                      type='date'
                      required
                      fullWidth
                      value={birthDate}
                      defaultValue={birthDate}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Gender</InputLabel>{' '}
                      <Typography>{gender}</Typography>
                    </div>
                  ) : (
                    <FormControl component='fieldset'>
                      <FormLabel component='legend' required>
                        Gender
                      </FormLabel>
                      <RadioGroup
                        aria-label='gender'
                        name='gender1'
                        value={gender}
                      >
                        <div style={{ display: 'flex' }}>
                          <FormControlLabel
                            disabled
                            value='female'
                            control={<Radio />}
                            label='Female'
                          />
                          <FormControlLabel
                            value='male'
                            disabled
                            control={<Radio />}
                            label='Male'
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Securty Level</InputLabel>{' '}
                      <Typography>{formikProps.values.seclevel}</Typography>
                    </div>
                  ) : (
                    <TextField
                      disabled
                      variant='outlined'
                      required
                      fullWidth
                      name='seclevel'
                      value={formikProps.values.seclevel}
                      onChange={formikProps.handleChange('seclevel')}
                      onBlur={formikProps.handleBlur('seclevel')}
                      helperText={
                        formikProps.touched.seclevel &&
                        formikProps.errors.seclevel
                          ? formikProps.errors.seclevel
                          : null
                      }
                      error={
                        formikProps.touched.seclevel &&
                        formikProps.errors.seclevel
                          ? true
                          : false
                      }
                      label='Security Level'
                      autoComplete='seclevel'
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>DepositAccountNumber</InputLabel>{' '}
                      <Typography>{formikProps.values.accountnum}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='accountnum'
                      value={formikProps.values.accountnum}
                      onChange={formikProps.handleChange('accountnum')}
                      onBlur={formikProps.handleBlur('accountnum')}
                      helperText={
                        formikProps.touched.accountnum &&
                        formikProps.errors.accountnum
                          ? formikProps.errors.accountnum
                          : null
                      }
                      error={
                        formikProps.touched.accountnum &&
                        formikProps.errors.accountnum
                          ? true
                          : false
                      }
                      label='DepositAccountNumber'
                      autoComplete='acnumber'
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>DepositRoutingNumber</InputLabel>{' '}
                      <Typography>{formikProps.values.routingnum}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='routingnum'
                      value={formikProps.values.routingnum}
                      onChange={formikProps.handleChange('routingnum')}
                      onBlur={formikProps.handleBlur('routingnum')}
                      helperText={
                        formikProps.touched.routingnum &&
                        formikProps.errors.routingnum
                          ? formikProps.errors.routingnum
                          : null
                      }
                      error={
                        formikProps.touched.routingnum &&
                        formikProps.errors.routingnum
                          ? true
                          : false
                      }
                      label='DepositRoutingNumber'
                      autoComplete='rcnumber'
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>DepositFinancialName</InputLabel>{' '}
                      <Typography>
                        {formikProps.values.financialname}
                      </Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='financialname'
                      value={formikProps.values.financialname}
                      onChange={formikProps.handleChange('financialname')}
                      onBlur={formikProps.handleBlur('financialname')}
                      helperText={
                        formikProps.touched.financialname &&
                        formikProps.errors.financialname
                          ? formikProps.errors.financialname
                          : null
                      }
                      error={
                        formikProps.touched.financialname &&
                        formikProps.errors.financialname
                          ? true
                          : false
                      }
                      label='DepositFinancialName'
                      autoComplete='finame'
                    />
                  )}
                </Grid>

                <Grid item xs={12}>
                  {view ? (
                    <div>
                      <InputLabel>VacationDateFirstEligble</InputLabel>{' '}
                      <Typography>{vacationDateFirstEligble}</Typography>
                    </div>
                  ) : (
                    <TextField
                      disabled
                      name='vdate'
                      label='VacationDateFirstEligble'
                      type='date'
                      required
                      fullWidth
                      value={vacationDateFirstEligble}
                      defaultValue={vacationDateFirstEligble}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6'>Address</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Address 1</InputLabel>{' '}
                      <Typography>{formikProps.values.address1}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='address1'
                      value={formikProps.values.address1}
                      onChange={formikProps.handleChange('address1')}
                      onBlur={formikProps.handleBlur('address1')}
                      helperText={
                        formikProps.touched.address1 &&
                        formikProps.errors.address1
                          ? formikProps.errors.address1
                          : null
                      }
                      error={
                        formikProps.touched.address1 &&
                        formikProps.errors.address1
                          ? true
                          : false
                      }
                      label='Address 1'
                      autoComplete='Add1'
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Address 2</InputLabel>{' '}
                      <Typography>{formikProps.values.address2}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='address2'
                      value={formikProps.values.address2}
                      onChange={formikProps.handleChange('address2')}
                      onBlur={formikProps.handleBlur('address2')}
                      helperText={
                        formikProps.touched.address2 &&
                        formikProps.errors.address2
                          ? formikProps.errors.address2
                          : null
                      }
                      error={
                        formikProps.touched.address2 &&
                        formikProps.errors.address2
                          ? true
                          : false
                      }
                      label='Address 2'
                      autoComplete='Add2'
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>City</InputLabel>{' '}
                      <Typography>{formikProps.values.city}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='city'
                      value={formikProps.values.city}
                      onChange={formikProps.handleChange('city')}
                      onBlur={formikProps.handleBlur('city')}
                      helperText={
                        formikProps.touched.city && formikProps.errors.city
                          ? formikProps.errors.city
                          : null
                      }
                      error={
                        formikProps.touched.city && formikProps.errors.city
                          ? true
                          : false
                      }
                      label='City'
                      autoComplete='city'
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>State</InputLabel>{' '}
                      <Typography>{formikProps.values.state}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='state'
                      value={formikProps.values.state}
                      onChange={formikProps.handleChange('state')}
                      onBlur={formikProps.handleBlur('state')}
                      helperText={
                        formikProps.touched.state && formikProps.errors.state
                          ? formikProps.errors.state
                          : null
                      }
                      error={
                        formikProps.touched.state && formikProps.errors.state
                          ? true
                          : false
                      }
                      label='State'
                      autoComplete='State'
                    />
                  )}
                </Grid>

                <Grid item xs={12}>
                  {view ? (
                    <div>
                      <InputLabel>Zip</InputLabel>{' '}
                      <Typography>{formikProps.values.zip}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='zip'
                      value={formikProps.values.zip}
                      onChange={formikProps.handleChange('zip')}
                      onBlur={formikProps.handleBlur('zip')}
                      helperText={
                        formikProps.touched.zip && formikProps.errors.zip
                          ? formikProps.errors.zip
                          : null
                      }
                      error={
                        formikProps.touched.zip && formikProps.errors.zip
                          ? true
                          : false
                      }
                      label='Zip'
                      autoComplete='zip'
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6'>Physical Address</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Address 1</InputLabel>{' '}
                      <Typography>{formikProps.values.paddress1}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='paddress1'
                      value={formikProps.values.paddress1}
                      onChange={formikProps.handleChange('paddress1')}
                      onBlur={formikProps.handleBlur('paddress1')}
                      helperText={
                        formikProps.touched.paddress1 &&
                        formikProps.errors.paddress1
                          ? formikProps.errors.paddress1
                          : null
                      }
                      error={
                        formikProps.touched.paddress1 &&
                        formikProps.errors.paddress1
                          ? true
                          : false
                      }
                      label='Address1'
                      autoComplete='Padd1'
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>Address 2</InputLabel>{' '}
                      <Typography>{formikProps.values.paddress2}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='paddress2'
                      value={formikProps.values.age}
                      onChange={formikProps.handleChange('paddress2')}
                      onBlur={formikProps.handleBlur('paddress2')}
                      helperText={
                        formikProps.touched.age && formikProps.errors.paddress2
                          ? formikProps.errors.paddress2
                          : null
                      }
                      error={
                        formikProps.touched.paddress2 &&
                        formikProps.errors.paddress2
                          ? true
                          : false
                      }
                      label='Address2'
                      autoComplete='Padd2'
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>City</InputLabel>{' '}
                      <Typography>{formikProps.values.pcity}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='pcity'
                      value={formikProps.values.pcity}
                      onChange={formikProps.handleChange('pcity')}
                      onBlur={formikProps.handleBlur('pcity')}
                      helperText={
                        formikProps.touched.pcity && formikProps.errors.pcity
                          ? formikProps.errors.pcity
                          : null
                      }
                      error={
                        formikProps.touched.pcity && formikProps.errors.pcity
                          ? true
                          : false
                      }
                      label='City'
                      autoComplete='pcity'
                    />
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  {view ? (
                    <div>
                      <InputLabel>State</InputLabel>{' '}
                      <Typography>{formikProps.values.pstate}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='pstate'
                      value={formikProps.values.pstate}
                      onChange={formikProps.handleChange('pstate')}
                      onBlur={formikProps.handleBlur('pstate')}
                      helperText={
                        formikProps.touched.pstate && formikProps.errors.pstate
                          ? formikProps.errors.pstate
                          : null
                      }
                      error={
                        formikProps.touched.pstate && formikProps.errors.pstate
                          ? true
                          : false
                      }
                      label='State'
                      autoComplete='pstate'
                    />
                  )}
                </Grid>

                <Grid item xs={12}>
                  {view ? (
                    <div>
                      <InputLabel>Zip</InputLabel>{' '}
                      <Typography>{formikProps.values.pzip}</Typography>
                    </div>
                  ) : (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='pzip'
                      value={formikProps.values.pzip}
                      onChange={formikProps.handleChange('pzip')}
                      onBlur={formikProps.handleBlur('pzip')}
                      helperText={
                        formikProps.touched.pzip && formikProps.errors.pzip
                          ? formikProps.errors.pzip
                          : null
                      }
                      error={
                        formikProps.touched.pzip && formikProps.errors.pzip
                          ? true
                          : false
                      }
                      label='Zip'
                      autoComplete='acnumber'
                    />
                  )}
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={formikProps.handleSubmit}
              >
                Save
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  )
}
