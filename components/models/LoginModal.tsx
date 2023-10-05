"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
// import { signIn } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";
import Input from "../Input";
import Heading from "../Heading";
import Button from "../Button";
import useLoginModal from "@/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/hooks/useRegisterModal";

const LoginModal = () => {
  const router = useRouter();

  const _LoginModal = useLoginModal();
  const _RegisterModal = useRegisterModal();
  
  const [isLoading, setIsLoading] = useState(false);

  const onToggle= useCallback(() => {
	_LoginModal.onClose();
	_RegisterModal.onOpen()


  },[_LoginModal,_RegisterModal])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
        _LoginModal.onClose();
      }

	  if (callback?.error) {
        toast.error(callback.error);
      }


    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome My Profile" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4">
      <hr/>
      <Button icon={FcGoogle} outline label='Google Sign In' onClick={()=>signIn('google')}/>
      <span onClick={onToggle} >Go signup Page</span>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={_LoginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={_LoginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
