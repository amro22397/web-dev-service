'use client'

import React, { useState } from 'react'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

import { info } from '../constants/info'

import { useRouter } from 'next/navigation'

import { Button } from "../components/ui/button"

import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"

import { IoMdClose } from "react-icons/io";

import Link from 'next/link'


const RquestWebsite = ({ showRequestForm, setShowRequestForm } : { 
    showRequestForm: boolean, setShowRequestForm: any
}) => {

     const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [email, setEmail] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [message, setMessage] = useState('');
    
    
    
    const handleChange = () => {
      setMessageSuccess(false);
      setError('');
    }
    
    
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');
        const [messageSuccess, setMessageSuccess] = useState(false);

    const handleSubmit = async (e : any) => {
        e.preventDefault();

        const formData = new FormData(e.target);

          formData.append("access_key", "ce9610a5-e759-46bf-86a7-08b198f09ac4");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

        if (firstName === '' || phoneNumber === '' || email === '' || message === '') {
          setMessageSuccess(false);
          
          return;
        }

        setLoading(true);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: "application/json"
            },
            body: json,
          });

          if (res.ok) {
            setMessageSuccess(true);
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhoneNumber('');
              setMessage('');
          } else {
            setMessageSuccess(false)
          }
          const result = await res.json();
          if (result.success) {
              console.log(result);
              
          }

          setLoading(false)

    }

  return (
    <>
    {showRequestForm && (
        <div className="xl:h-[54%] order-2 xl:order-none
    absolute top-[8.27rem] bottom-0 left-0 right-0 h-full
    max-w-[600px] mx-auto">

        <IoMdClose className='absolute right-3 top-3 text-2xl
        hover:text-black/80 cursor-pointer hover:scale-95'
        onClick={() => setShowRequestForm(false)} />

            <form onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-10 bg-indigo-300/90">
              <h3 className="text-4xl text-stone-600"
              style={{fontFamily: "Trebuchet MS"}}>Let's work together</h3>
              <p className="text-black">
              Fill the form and send it to request building your website...
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <Input type="name" placeholder="Your Name"
              className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} />
              
              <Input type="email" placeholder="Email address"
              className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} />

              <Input type="phone" placeholder="Phone number"
              className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} />

              <Input type="text" placeholder="Whatsapp number"
              className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} />

              </div>

              <select onChange={handleChange} id="service"
              name="service"
              className='bg-white text-black/80 px-3
              py-3 border border-gray-50/10 hidden'>
                <option value="Frontend">Frontend Development</option>
                <option value="Backend">Backend Development</option>
                <option value="Full Stack">Full Stack Development</option>
              </select>

              <Textarea className='bg-white border-none rounded-xl text-gray-400'
              style={{borderRadius: ".25rem"}} rows={6} 
              placeholder="Describe your project here" />

              <Button type='submit'
              size="lg" className="max-w-40 py-2 bg-indigo-600 hover:bg-indigo-700
              active:scale-95 text-white disabled:bg-gray-400" disabled={loading}
              style={{borderRadius: ".25rem"}}>
                {loading ? 'Sending...' : 'Send message'}
              </Button>

              {messageSuccess && (
                <div className="flex flex-row items-center justify-center text-white text-xl
                gap-2">
                  <i className="fa-solid fa-circle-check
                  text-green-600 "></i>
                  <span>Message sent successfully!</span>
                </div>
              )}
            </form>
          </div>
    )}
    </>
  )
}

export default RquestWebsite