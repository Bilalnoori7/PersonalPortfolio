import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';
import { Suspense } from "react";
import { useTheme } from "../ThemeContext";
import Alert from '../Alert.jsx';
import Loader from '../Loader.jsx';
import { Fox } from '../models/Fox.jsx';

export const Contact = () => {
    const { currentTheme } = useTheme();
    const formRef = useRef(null);
    const [form, setForm] = useState({name:"", email:"",subject:"", message:""});
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });
    const [errors, setErrors] = useState({});
    
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!form.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!form.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (form.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const showAlert = ({ text, type = 'danger' }) => {
        setAlert({ show: true, text, type });
        setTimeout(() => {
            setAlert({ show: false, text: '', type: 'danger' });
        }, 8000); // Increased from 5000 to 8000ms for better visibility
    };
      
    const handleFocus = () => setCurrentAnimation("walk");
    const handleBlur = () => setCurrentAnimation("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            showAlert({ text: '❌ Please fix the errors below before submitting!', type: 'danger' });
            return;
        }
        
        setIsLoading(true);
        setCurrentAnimation("hit");

        setTimeout(() => {
            setCurrentAnimation("idle");
        }, 6000);
        
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
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                showAlert({ 
                    text: '✅ Message sent successfully! I\'ll get back to you soon.', 
                    type: 'success' 
                });
                setForm({
                    name: "",
                    email: "",
                    subject:"",
                    message: ""
                });
            } else {
                // Handle other non-200 responses
                showAlert({ 
                    text: `❌ Message failed to send (Status: ${response.status}). Please try again.`, 
                    type: 'danger' 
                });
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.error('EmailJS Error:', error);
            
            // Handle specific error cases
            if (error.status === 400) {
                showAlert({ 
                    text: '❌ Invalid request. Please check your details and try again.', 
                    type: 'danger' 
                });
            } else if (error.status >= 500) {
                showAlert({ 
                    text: '❌ Server error. Please try again later.', 
                    type: 'danger' 
                });
            } else {
                showAlert({ 
                    text: '❌ Failed to send message. Please check your connection and try again.', 
                    type: 'danger' 
                });
            }
        });
    };
    
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-6xl mx-auto px-4 w-full">
                {/* Alert - Matching page color style */}
                {alert.show && (
                    <div className={`
                        fixed top-20 left-1/2 transform -translate-x-1/2 z-40
                        px-8 py-4 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg
                        glass
                        ${alert.type === 'success' 
                            ? `${currentTheme.textColor} bg-white/5` 
                            : `${currentTheme.textColor} bg-white/5`
                        }
                        transition-all duration-500 ease-out
                        max-w-lg mx-4 text-center font-medium text-lg
                        animate-in slide-in-from-top-4 fade-in
                        hover:scale-105 hover:shadow-3xl
                    `}>
                        <div className="flex items-center justify-center gap-3">
                            <span className={`text-xl ${alert.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                {alert.type === 'success' ? '✅' : '❌'}
                            </span>
                            <span className="flex-1">{alert.text.replace(/[✅❌]/g, '').trim()}</span>
                            <button 
                                onClick={() => setAlert({ show: false, text: '', type: 'danger' })}
                                className={`ml-2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 
                                         flex items-center justify-center hover:${currentTheme.textColor} 
                                         transition-colors duration-200 text-sm font-bold ${currentTheme.textColor} opacity-70 hover:opacity-100`}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className={`text-5xl font-bold mb-4 ${currentTheme.textColor} font-sans`}>
                        Get in Touch
                    </h1>
                    <p className={`text-lg opacity-80 ${currentTheme.textColor} max-w-2xl mx-auto`}>
                        Interested in discussing career opportunities or connecting about potential roles? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form - Always first on small screens, first on large screens */}
                    <div className="order-1">
                        <div className="glass p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <form 
                                ref={formRef}
                                className="space-y-6" 
                                onSubmit={handleSubmit}
                            >
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label className={`block text-sm font-medium ${currentTheme.textColor}`}>
                                        Name *
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className={`
                                            w-full px-4 py-3 rounded-xl border border-amber-600 transition-all duration-200
                                            bg-white/5 backdrop-blur-sm
                                            ${currentTheme.textColor} placeholder:text-white/50
                                            ${errors.name 
                                                ? 'border-red-500 focus:border-red-500' 
                                                : 'focus:border-amber-400'
                                            }
                                            focus:outline-none focus:ring-2 focus:ring-white/20
                                        `}
                                        placeholder="Your name" 
                                        required 
                                        value={form.name}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-sm flex items-center gap-1">
                                            <span>⚠️</span> {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className={`block text-sm font-medium ${currentTheme.textColor}`}>
                                        Email *
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className={`
                                            w-full px-4 py-3 rounded-xl border border-amber-600 transition-all duration-200
                                            bg-white/5 backdrop-blur-sm
                                            ${currentTheme.textColor} placeholder:text-white/50
                                            ${errors.email 
                                                ? 'border-red-500 focus:border-red-500' 
                                                : 'focus:border-amber-400'
                                            }
                                            focus:outline-none focus:ring-2 focus:ring-white/20
                                        `}
                                        placeholder="your.email@example.com" 
                                        required 
                                        value={form.email}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm flex items-center gap-1">
                                            <span>⚠️</span> {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Subject Field */}
                                <div className="space-y-2">
                                    <label className={`block text-sm font-medium ${currentTheme.textColor}`}>
                                        Subject *
                                    </label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        className={`
                                            w-full px-4 py-3 rounded-xl border border-amber-600 transition-all duration-200
                                            bg-white/5 backdrop-blur-sm
                                            ${currentTheme.textColor} placeholder:text-white/50
                                            ${errors.subject 
                                                ? 'border-red-500 focus:border-red-500' 
                                                : 'focus:border-amber-400'
                                            }
                                            focus:outline-none focus:ring-2 focus:ring-white/20
                                        `}
                                        placeholder="What's this about?" 
                                        required 
                                        value={form.subject}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    {errors.subject && (
                                        <p className="text-red-400 text-sm flex items-center gap-1">
                                            <span>⚠️</span> {errors.subject}
                                        </p>
                                    )}
                                </div>
                                
                                {/* Message Field */}
                                <div className="space-y-2">
                                    <label className={`block text-sm font-medium ${currentTheme.textColor}`}>
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message" 
                                        rows="5"
                                        className={`
                                            w-full px-4 py-3 rounded-xl border border-amber-600 transition-all duration-200
                                            bg-white/5 backdrop-blur-sm resize-none
                                            ${currentTheme.textColor} placeholder:text-white/50
                                            ${errors.message 
                                                ? 'border-red-500 focus:border-red-500' 
                                                : 'focus:border-amber-400'
                                            }
                                            focus:outline-none focus:ring-2 focus:ring-white/20
                                        `}
                                        placeholder="Tell me about your project or how I can help you..." 
                                        required 
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-sm flex items-center gap-1">
                                            <span>⚠️</span> {errors.message}
                                        </p>
                                    )}
                                    <p className={`text-xs opacity-60 ${currentTheme.textColor}`}>
                                        {form.message.length}/500 characters
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="btn px-8 py-3 min-w-[150px]"
                                        disabled={isLoading}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    >
                                        {isLoading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>

                          {/* Contact Info */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h3 className={`text-lg font-semibold mb-4 ${currentTheme.textColor}`}>
                                    Other ways to reach me
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <span className={`text-sm text-amber-600 opacity-80`}>
                                            nooribil@msu.edu
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </div>
                                        <a 
                                            href="https://linkedin.com/in/your-profile" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`text-sm text-amber-600 opacity-80 hover:opacity-100 transition-opacity duration-200`}
                                        >
                                            Connect on LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3D Fox Scene - Always second on small screens, second on large screens */}
                    <div className="order-2">
                        <div className="glass p-4 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <div className="aspect-square w-full rounded-xl overflow-hidden">
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

                                    <Suspense fallback={<Loader />}>
                                        <Fox
                                            currentAnimation={currentAnimation}
                                            position={[0.5, 0.35, 0]}
                                            rotation={[-12.629, -0.6, 0]}
                                            scale={[0.5, 0.5, 0.5]}
                                        />
                                    </Suspense>
                                </Canvas>
                            </div>
                            
                            {/* Animation Status */}
                            <div className="mt-4 text-center">
                                <p className={`text-sm ${currentTheme.textColor} opacity-60`}>
                                    {currentAnimation === "idle" && "🦊 The fox is waiting..."}
                                    {currentAnimation === "walk" && "🚶 The fox is listening..."}
                                    {currentAnimation === "hit" && "💫 The fox is working..."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};