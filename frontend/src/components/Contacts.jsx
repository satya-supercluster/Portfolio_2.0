import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../motion'
const Contacts = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const [sent,setSent]=useState(false);
  const [error,setError]=useState(false);
  const data={
    name:name,
    email:email,
    message:message
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!(name.trim())){
      setError(true);
      return;
    }
    const res=await fetch(`${process.env.SERVER}`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data)
    });
    if(res&&(res.success===true)){
      setSent(true);
    }
    else{
      setError(true);
    }
  }
  useEffect(()=>{
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(()=>{
      setSent(false);
      setError(false);
    },3000);

  },[sent,error])
  return (
    <section className='py-16 ' id='contacts' >
      <div className='container mx-auto  max-[960px]:mt-10 mb-[3rem]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-screen'>
          <div className='flex flex-col justify-center items-left'>
            <motion.h4 
            variants={fadeIn('up',0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            className='text-3xl uppercase text-accent mb-2 tracking-wide font-extrabold'
            >Get In Touch
            </motion.h4>
            <motion.h2
            variants={fadeIn('up',0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            className='text-[45px] lg:text-[90px] leading-none font-semibold lg:mb-12'>Shoot Me<br /> A Message!</motion.h2>
          </div>
          <motion.form 
          onSubmit={handleSubmit}
          variants={fadeIn('up',0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once:false,
            amount:0.7
          }}
          className='flex-1 flex flex-col justify-center items-left'>
            <input 
            className='bg-transparent border-b-2 py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            placeholder='Your Name'
            type="text" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            />
            <input 
            className='bg-transparent border-b-2 py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            placeholder='Your Email'
            type="email"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
            <textarea 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className='resize-none bg-transparent border-b-2 py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12'
            placeholder='Your Message'
            rows="2"
            required
            ></textarea>
            <button type='submit' className='btn btn-lg'>Send Message</button>
            {sent?<p className='my-3 text-center text-green-600 lg:text-lg font-semibold'>Thanks For Shooting!</p>:null}
            {error?<p className='my-3 text-center text-rose-600 lg:text-lg font-semibold'>Bad Practice!</p>:null}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contacts