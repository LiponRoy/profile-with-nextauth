import React from 'react';

interface buttonProps {
	title: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ title, onClick }: buttonProps) => {
	return (
		<>
			<button onClick={onClick}>{title}</button>
		</>
	);
};

export default Button;
