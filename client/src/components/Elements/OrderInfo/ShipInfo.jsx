import React from 'react'
import css from '../styles/Order.module.scss';
import {useSelector} from 'react-redux'
const ShipInfo = () => {
    const {shippingInfo}=useSelector((e)=>e.orderData);
  return (
    <div className={css.ShipInfo}>
        <h4>Shipping Information</h4>
        <p>You are eligible for free shipment</p>
        <div>
            <div className={css.sElm}>
                <h6>Address:</h6>
                <p>{shippingInfo?.address}</p>

            </div>
            <div className={css.sElm}>
                <h6>City:</h6>
                <p>{shippingInfo?.city}</p>

            </div>
            <div className={css.sElm}>
                <h6>State:</h6>
                <p>{shippingInfo?.state}</p>

            </div>
            <div className={css.sElm}>
                <h6>Pincode:</h6>
                <p>{shippingInfo?.pinCode}</p>

            </div>
            <div className={css.sElm}>
                <h6>Contact No. :</h6>
                <p>{shippingInfo?.pinCode}</p>

            </div>
        </div>
    </div>
  )
}

export default ShipInfo