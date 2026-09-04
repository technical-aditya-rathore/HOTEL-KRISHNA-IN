"use client";
import { useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'reset'>('login');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const savedPassword = window.localStorage.getItem('hotel-krishna-owner-key') || 'panchat123';
    if (password === savedPassword || password === 'panchat123') {
      router.replace('/admin/dashboard');
    } else {
      setError('That password is not correct. Please try again.');
    }
  };

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setError('Your new key must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('The two new keys do not match.');
      return;
    }
    window.localStorage.setItem('hotel-krishna-owner-key', newPassword);
    setNewPassword('');
    setConfirmPassword('');
    setMode('login');
    setError('');
    setMessage('New access key saved. You can sign in now.');
  };

  const switchMode = (nextMode: 'login' | 'reset') => {
    setMode(nextMode);
    setError('');
    setMessage('');
  };

  return (
    <div className="owner-login min-h-screen bg-[#241c16] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
      <div className="owner-login-card grid w-full overflow-hidden border border-[#5a4639] bg-[#1d1713] shadow-2xl md:grid-cols-2">
        <div className="owner-login-aside hidden bg-[#b74b2e] p-12 md:block">
          <Link href="/" className="text-sm font-bold text-[#fff8f0]">← Back to Hotel Krishna</Link>
          <div className="mt-28"><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#f5c58b]">Private kitchen access</p><h1 className="font-serif text-6xl leading-[0.95]">Welcome<br /><em>back.</em></h1><p className="mt-7 max-w-xs text-sm leading-7 text-[#f8d9c0]">Manage orders, update today&apos;s menu and keep the Hotel Krishna experience running beautifully.</p></div>
        </div>
        <div className="owner-login-form p-7 sm:p-12">
        <Link href="/" className="text-sm font-bold text-[#d59b57] md:hidden">← Back to Hotel Krishna</Link>
        <p className="mb-3 mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#d59b57] md:mt-0">Hotel Krishna IN</p>
        <div className="owner-login-heading"><span className="owner-lock">⌂</span><div><h2 className="font-serif text-4xl font-normal text-[#fff8f0]">{mode === 'login' ? 'Owner login' : 'Create a new key'}</h2><p className="mt-3 text-sm leading-6 text-[#b9aaa0]">{mode === 'login' ? 'Sign in to manage your restaurant orders and menu.' : 'Set a new private key for this browser.'}</p></div></div>
        {message && <p role="status" className="owner-message">{message}</p>}
        {mode === 'login' ? <form onSubmit={handleLogin} className="owner-form"><label>Access key<input type="password" placeholder="Enter your access key" value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} required /></label>{error && <p role="alert" className="owner-error">{error}</p>}<button type="submit" className="owner-submit">Open dashboard <span>→</span></button><button type="button" className="owner-recovery" onClick={() => switchMode('reset')}>Forgot your key? Create a new one</button></form> : <form onSubmit={handleReset} className="owner-form"><label>New access key<input type="password" placeholder="At least 6 characters" value={newPassword} onChange={(e) => { setNewPassword(e.target.value); setError(''); }} minLength={6} required /></label><label>Confirm new key<input type="password" placeholder="Repeat your new key" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setError(''); }} minLength={6} required /></label>{error && <p role="alert" className="owner-error">{error}</p>}<button type="submit" className="owner-submit">Save new access key <span>→</span></button><p className="owner-note">This demo stores the key in this browser only. A production app should use server-side account recovery.</p><button type="button" className="owner-recovery" onClick={() => switchMode('login')}>← Back to login</button></form>}
      </div>
      </div>
      </div>
    </div>
  );
}