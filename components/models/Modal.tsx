import React, { useEffect, useState } from 'react';

interface modalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit?: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
}

const Modal = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
}: modalProps) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	return (
		<>
			<div className=" h-screen w-full justify-center items-center bg-slate-800 opacity-20">
				<div
					className={`relative bg-slate-400 text-slate-600 w-1/3 min-h-0 flex flex-col justify-center items-center translate duration-300 ${
						isOpen
							? ' translate-y-0 opacity-100'
							: ' translate-y-full opacity-0'
					}`}
				>
					<span>{title}</span>
					<div className="">{body}</div>
					<div className="">{footer}</div>
					<div
						onClick={onClose}
						className=" absolute top-5 left-5 cursor-pointer"
					>
						X
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
