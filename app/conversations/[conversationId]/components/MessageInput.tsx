'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps{
    placeholder?: string;
    required?: boolean;
    id: string;
    type?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}



const MessageInput: React.FC<MessageInputProps> = ({
    placeholder,
    required,
    id,
    type,
    register,
    errors
}) => {
  return (
    <div className="relative w-full">
      <input type={type} id={id} autoComplete={id}  {...register(id,{required  })} className="text-black py-2 px-4 bg-neutral-100  w-full rounded-full focus:outline-none" placeholder={placeholder}/>
    </div>
  )
}

export default MessageInput
