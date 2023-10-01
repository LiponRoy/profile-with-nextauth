import React, { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import { RxCross2 } from 'react-icons/rx';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	// onSubmit: () => void;
	title: string;
	disabled?: boolean;
	body: React.ReactElement;
	footer: React.ReactElement;
}

const Modal = ({
	isOpen,
	onClose,
	// onSubmit,
	title,
	disabled,
	body,
	footer,
}: ModalProps) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		setShowModal(false);
		onClose();
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}
		// onSubmit();
	}, [disabled]);

	return (
		<>
			<div className="relative bg-slate-800">
				<div className=" flex flex-col justify-center items-center w-[500px] h-full ">
					<span>{title}</span>
					<div>{body}</div>
					<span>{footer}</span>
					<Button title="Submit" />
				</div>
				<div onClick={onClose} className=" absolute top-2 right-2">
					<RxCross2 />
				</div>
			</div>
		</>
	);
};

export default Modal;
