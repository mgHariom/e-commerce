import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';
import { runConfetti } from '../lib/utils';

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantity} = useStateContext();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantity(0);
        runConfetti();
    }, [])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'><BsBagCheckFill/></p>
            <h2>Thank you for your order</h2>
            <p className='email-msg'>Check your inbox for the receipt</p>
            <p className='description'>
                If you have any questions, please email
                <a className='email' href="mailto:hariommg1706@gmail.com">
                hariommg1706@gmail.com
                </a>
            </p>
            <Link href='/'>
                <button type='button' width="300px" className='btn'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success
