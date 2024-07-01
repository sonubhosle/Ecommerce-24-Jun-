import { Button } from '@mui/material'
import React from 'react'

const Delivery_Address = () => {
  return (
    <div className='delivery_address_section'>
      <h2>Fill Your Delivery Address</h2>
      <form >
        <div className="input_groups">
          <div className="input_box">
            <div className="label">First Name</div>
            <input type="text" placeholder='First Name' id='firstName' name='firstName' required />
          </div>
          <div className="input_box">
            <div className="label">Last Name</div>
            <input type="text" placeholder='Last Name'  id='lastName' name='lastName'  required/>
          </div>
        </div>
        <div className="input_groups">
          <div className="input_box">
            <div className="label">Address</div>
            <input type="text"  placeholder='Enter Address' id='address' name='address' required/>
          </div>
        </div>
        <div className="input_groups">
          <div className="input_box">
            <div className="label">City</div>
            <input type="text" id='city' name='city' placeholder='City' required />
          </div>
          <div className="input_box">
            <div className="label">City</div>
            <input type="text" placeholder='State' id='state' name='state' required  />
          </div>
        </div>
        <div className="input_groups">
          <div className="input_box">
            <div className="label">Zip Code</div>
            <input type="text"  id='zip' name='zip' required placeholder='Zip Code'/>
          </div>
          <div className="input_box">
            <div className="label">Mobile Number</div>
            <input type="text" id='phoneNumber' name='phoneNumber' placeholder='Mobile Number'  required/>
          </div>
        </div>
        <div className="input_groups">
          <div className="input_box">
            <div className="label">Email</div>
            <input type="email" placeholder='Email' id='email' name='email' required />
          </div>
        </div>
        <div className="input_groups">
          <Button type='submit' variant='contained' sx={{ px: '2rem', py: '.7rem', bgcolor: "#9155fd" }} >
            Deliver Here
          </Button>
        </div>
      </form>

    </div>
  )
}

export default Delivery_Address