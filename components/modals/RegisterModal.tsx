import React from 'react';
import Modal from './Modal';
import useRegisterModal from '@/hooks/useRegisterModal';

const RegisterModal = () => {
	const use_register_modal = useRegisterModal();

	const Body = <div className=""> This is Body</div>;
	const Footer = <div className=""> This is Footer</div>;

	console.log('use reg', use_register_modal.isOpen);

	return (
		<>
			<Modal
				title="Register Please"
				isOpen={use_register_modal.isOpen}
				onClose={use_register_modal.onClose}
				body={Body}
				footer={Footer}
			/>
		</>
	);
};

export default RegisterModal;
