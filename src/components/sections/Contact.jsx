import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';
import { Suspense} from "react";
// At the top of Contact.jsx
import Alert from '../Alert.jsx';
import Loader from '../Loader.jsx';
// At the top of Contact.jsx
import {Fox } from '../models/Fox.jsx';


export const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({name:"", email:"",subject:"", message:""});
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");
    
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };


      
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation("hit");

            setTimeout(() => {
        setCurrentAnimation("idle");
    }, 5000);
        
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                name: form.name,
                to_name: "Bilal",
                email: form.email,
                subject: form.subject,
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setIsLoading(false);  // Fixed variable name
            // Consider resetting the form here
            setForm({
                name: "",
                email: "",
                subject:"",
                message: ""
            });

        })
        .catch((error) => {
            setIsLoading(false);  // Fixed variable name
            console.log(error);
        });
    };
    
    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className="w-full flex justify-center mb-8 lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:z-10">
                <h1 className="head-text">Get in Touch</h1>
            </div>
            <div id="contact" className="flex-1 min-w-[50%] flex flex-col lg:mt-16">
                <form 
                    ref={formRef}  // Added missing ref
                    className="w-full flex flex-col gap-7 mt-14" 
                    onSubmit={handleSubmit}
                >
                    <label className="text-black-500 font-semibold">Name
                        <input 
                          type="text" 
                          name="name" 
                          className="input" 
                          placeholder="Adam" 
                          required 
                          value={form.name}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">Email
                        <input 
                          type="email" 
                          name="email" 
                          className="input" 
                          placeholder="adam@gmail.com" 
                          required 
                          value={form.email}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />

                        
                    </label>

                    <label className="text-black-500 font-semibold">Subject
                        <input 
                          type="subject" 
                          name="subject" 
                          className="input" 
                          placeholder="subject" 
                          required 
                          value={form.subject}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                    </label>
                    
                    <label className="text-black-500 font-semibold"> Your Message
                        <textarea
                          name="message" 
                          rows="4"  // Fixed "row" to "rows"
                          className="textarea input"
                          placeholder="Let me know how I can help you!"  // Fixed typo in placeholder
                          required 
                          value={form.message}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type="submit"
                        className="btn"
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] lg:mt-16'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={null}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[-12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
        </section>
    );
};