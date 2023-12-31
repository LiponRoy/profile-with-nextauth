'use client';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
// import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';

import Modal from './Modal';
import Input from '../Input';
import Heading from '../Heading';
import Button from '../Button';
import { signIn } from 'next-auth/react';


const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const _LoginModal = useLoginModal();
	
	const [isLoading, setIsLoading] = useState(false);


	const onToggle= useCallback(() => {
		_LoginModal.onOpen();
		registerModal.onClose();
	
	
	  },[_LoginModal,registerModal])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post('/api/register', data)
			.then(() => {
				toast.success('Registered!');
				registerModal.onClose();
			})
			.catch((error) => {
				toast.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Welcome My Profile" subtitle="Create an account!" />
			<Input
				id="name"
				label="Name"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
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
		  <span onClick={onToggle} >Go login Page</span>
		</div>
		
	  );

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Register"
			actionLabel="Continue"
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
