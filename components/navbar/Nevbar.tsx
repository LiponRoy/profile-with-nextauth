'use client';
import { Logo } from '..';
import { navItem, profileItem } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import useRegisterModal from '@/hooks/useRegisterModal';

const Nevbar = () => {
	const registerModal = useRegisterModal();

	const [toggle, setToggle] = useState(false);
	const [profileToggle, setProfileToggle] = useState(false);

	const changeToggle = () => {
		setToggle(!toggle);
	};
	const changeProfileToggle = () => {
		setProfileToggle(!profileToggle);
		// console.log(profileToggle);
	};

	return (
		<div className="nav-container">
			<Logo title="U-PROFILE" />
			<div className="hidden md:flex bg-slate-100 p-2 rounded-lg border-2 border-slate-300">
				{navItem.map((value) => (
					<Link href={value.url} key={value.id}>
						<span className=" px-2 hover:text-slate-400">{value.item}</span>
					</Link>
				))}
			</div>
			<div className="md:hidden ">
				<div onClick={() => changeToggle()} className=" cursor-pointer">
					{!toggle && <FaAlignJustify />}
				</div>
			</div>

			{toggle && (
				<div className="nav-toggle relative">
					{navItem.map((value) => (
						<Link
							className=" mx-2"
							onClick={() => changeToggle()}
							href={value.url}
							key={value.id}
						>
							<span className=" hover:text-slate-400 my-16">{value.item}</span>
						</Link>
					))}
					<div
						onClick={() => changeToggle()}
						className=" absolute right-8 cursor-pointer"
					>
						<RxCross2 />
					</div>
				</div>
			)}

			<div
				onClick={() => changeProfileToggle()}
				className=" cursor-pointer flex justify-center items-center gap-2 border-2 border-slate-300 rounded-lg p-2"
			>
				<CgProfile />
				<span>Profile</span>
			</div>

			{profileToggle && (
				<div
					onClick={() => changeProfileToggle()}
					className=" justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          absolute right-6 top-16 
          z-40
          outline-none 
          focus:outline-none
          bg-neutral-800/90
          rounded-md
          "
				>
					<div className="flex flex-col justify-center items-start bg-slate-400 text-white p-6 gap-y-2 ">
						{/* {profileItem.map((val) => (
							<Link key={val.id} href={val.url}>
								{val.item}
							</Link>
						))} */}
						<span className=" cursor-pointer">Login</span>
						<span onClick={registerModal.onOpen} className=" cursor-pointer">
							Register
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Nevbar;
