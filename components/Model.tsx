import React, { useCallback } from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import Button from './Button';
interface ModelProps {
    isOpen?: boolean,
    onClose: () => void,
    onSubmit: () => void,
    title?: string,
    body?: React.ReactElement,
    footer?: React.ReactElement,
    actionLable: string,
    disabled?: boolean,

}
const Model: React.FC<ModelProps> = ({isOpen, onClose, onSubmit, title, body, footer,actionLable, disabled}) => {
    const handelClose = useCallback(() => {
        if(disabled) return
        onClose()
    }, [disabled, onClose])

    const handelSubmit = useCallback(() => {
        if(disabled) return
        onSubmit()
    }, [disabled, onSubmit])

    if(!isOpen) return null
  return (
    <>
        <div className='
        flex 
        justify-center 
        items-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800
        bg-opacity-80
        w-screen
        h-screen
        '>
            <div className='
            relative
            w-full
            lg:w-3/4
            my-6
            mx-auto
            lg:max-w-3xl
            h-full
            lg:h-auto
            '>
                <div className='
                h-full
                lg:h-auto
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-black
                outline-none
                focus:outlione-none
                '>
                    <div className='
                    flex items-center 
                    justify-between
                    p-10 rounded-r-lg
                    '>
                        <h1 className="text-3xl text-white font-semibold">{title} </h1>
                        <button 
                        onClick={handelClose}
                        className='p-1 ml-auto border-0 hover:opacity-30 transition'>
                            <AiOutlineClose size={20} color='white'/>
                        </button>
                    </div>
                    <div className='relative p-10 flex-auto'>
                        {body}
                    </div>
                    <div className='flex flex-col gap-2 p-10'>
                        <Button 
                        disabled={disabled} 
                        secondary 
                        fullWidth 
                        onClick={handelSubmit} 
                        large
                        lable={actionLable}
                        />
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Model