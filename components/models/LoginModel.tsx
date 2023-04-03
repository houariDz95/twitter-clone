import React, { useCallback, useState } from 'react'
import useLoginModel from '@/hooks/useLoginModel';
import Model from '../Model';
import Input from '../Input';
import useRegisterModel from '@/hooks/useRegisterModel';
const LoginModel = () => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const loginModel = useLoginModel()
    const registerModel = useRegisterModel();

    const onSubmit = useCallback(async () => {
        try {
            loginModel.onClose()
        } catch (error) {
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }, [loginModel])
    const onToggle = useCallback(() =>{
        if(isLoading) return
        registerModel.onOpen();
        loginModel.onClose()
    }, [isLoading, registerModel, loginModel])

    const bodyContent = (
        <div className='flex flex-col ga-4'>
            <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder='Password'type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
    )

    const footerContent = (
        <div className='text-neutral-400 text-center ml-4'>
            <p>First time useing twitter? <span onClick={onToggle} className='text-white cursor-pointer hover:underline'>Create an account</span></p>
        </div>
    )
  return (
    <Model 
    disabled={isLoading}
    isOpen={loginModel.isOpen}
    title='Login'
    actionLable='Sign in'
    onClose={loginModel.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
    />
  )
}

export default LoginModel