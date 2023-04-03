import React, { useCallback, useState } from 'react'
import Model from '../Model';
import Input from '../Input';
import useRegisterModel from '@/hooks/useRegisterModel';
import useLoginModel from '@/hooks/useLoginModel';
const RegisterModel = () => {
    const[email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const registerModel = useRegisterModel();
    const loginModel = useLoginModel()
    const onSubmit = useCallback(async () => {
        try {
            registerModel.onClose()
        } catch (error) {
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }, [registerModel])
    const onToggle = useCallback(() =>{
        if(isLoading) return
        registerModel.onClose();
        loginModel.onOpen()
    }, [isLoading, registerModel, loginModel])
    const bodyContent = (
        <div className='flex flex-col ga-4'>
            <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder='Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder='Password'type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
    )

    const footerContent = (
        <div className='text-neutral-400 text-center ml-4'>
            <p>Alredy have an account? <span onClick={onToggle} className='text-white cursor-pointer hover:underline'>Sign in</span></p>
        </div>
    )
  return (
    <Model 
    disabled={isLoading}
    isOpen={registerModel.isOpen}
    title='Register'
    actionLable='Sign up'
    onClose={registerModel.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
    />
  )
}

export default RegisterModel