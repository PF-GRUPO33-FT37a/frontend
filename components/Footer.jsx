import Image from 'next/image';
import logo from '../public/logowhite.png';

export default function Footer() {
	function openPopup() {
		document.getElementById("popup").style.display = "block";
	  }
	  
	  function closePopup() {
		document.getElementById("popup").style.display = "none";
	  }
	return (
		<footer className='bg-black min-h-[40vh] text-white  p-[2rem] '>
			<div className='flex justify-around'>
				<div className='w-[30%] text-center'>
					<div className='flex items-center gap-x-[1rem] justify-center   '>
						<Image
							className='border-r-2 border-white px-[2rem]  w-[150px]'
							src={logo}
							alt='logo'
							width={100}
							height={100}
						/>
						<div className=' flex flex-col'>
							<span>e-commerce</span>
							<span>international</span>
						</div>
					</div>

					<div className='mt-[1rem] flex flex-col gap-y-[1rem] items-center'>
						<p className='text-thin text-[0.6rem] text-start'>
							¡Suscribite a nuestro newsletter! y gana 8% ADICIONAL en tu
							primera compra* <br />
							Recibí las mejores promociones y novedades del mundo de la moda
						</p>
						<div className='flex gap-x-[1rem] mb-[1rem] justify-start' >
						<form className="flex flex-col justify-start rounded-[0.6rem]">
						<div className="flex gap-x-[1rem] mb-[0.6rem]">
							<input
							className="text-black rounded-[0.6rem] py-[0.6rem] pl-[1rem]"
							type="e-mail"
							name="email"
							placeholder="Email"
							/>
							<input
							className="text-black rounded-[0.6rem] py-[0.6rem] pl-[1rem]"
							type="text"
							name="message"
							placeholder="Message"
							/>
						</div>
						<button className="rounded-[0.6rem] bg-[#909090] py-[0.6rem] px-[1rem]">
							Suscribirse
						</button>
						</form>
						</div>
					</div>

					<span className='text-[0.8rem]'>
						© 2023 Online Shop | e-commerce Inc.
					</span>
				</div>

				<div className='flex w-[70%] justify-around'>
				<article className="flex flex-col gap-y-2">
					<h3 className="underline">Info</h3>
					<span className="text-sm">About</span>
					<span
						className="text-sm text-blue-500 cursor-pointer"
						onClick={openPopup}
					>
						Contact Us
					</span>
					<span className="text-sm">Privacy Policy</span>
					<span className="text-sm">Terms</span>
					</article>

					<div id="popup" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden">
					<div className="bg-white p-6 rounded-md max-w-md mx-auto" style={{ marginTop: '150px' }}>
						<form>
							<span onClick={closePopup} className='text-black cursor-pointer ml-auto self-center'>x</span>
						<h2 className="mb-4 text-lg font-bold text-center text-black">Contact Us</h2>
						<div className="mb-4">
							<label htmlFor="email" className="block mb-2 text-black">Email:</label>
							<input
							type="email"
							id="email"
							name="email"
							className="w-full p-2 border border-gray-300 rounded-md"
							placeholder='E-mail'
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="block mb-2 text-black">Message:</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								className="w-full p-2 border border-gray-300 rounded-md text-black" // Agrega la clase "text-black"
								placeholder='Message'
							/>
							</div>
						<button
							type="submit"
							className="bg-blue-500 text-white py-2 px-4 rounded-md"
						>
							Send
						</button>
						</form>
						<span
						className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 cursor-pointer"
						onClick={closePopup}
						>
						&times;
						</span>
					</div>
					</div>
					<article className='flex flex-col gap-y-[0.6rem]'>
						<h3 className='underline'>Products</h3>
						<span className='text-[0.8rem]'>Zapatillas</span>
						<span className='text-[0.8rem]'>Buzos</span>
						<span className='text-[0.8rem]'>Jeans</span>
						<span className='text-[0.8rem]'>Remeras</span>
						<span className='text-[0.8rem]'>Gorras</span>
						<span className='text-[0.8rem]'>Relojes</span>
					</article>

					<article className='flex flex-col gap-y-[0.6rem]'>
						<h3 className='underline'>Metodos de pago</h3>
						<span className='text-[0.8rem]'>Mercado Pago</span>
						<span className='text-[0.8rem]'>RapiPago</span>
						<span className='text-[0.8rem]'>Pago Facil</span>
						<span className='text-[0.8rem]'>Visa</span>
						<span className='text-[0.8rem]'>MasterCard</span>
						<span className='text-[0.8rem]'>Naranja</span>
						<span className='text-[0.8rem]'>American Express</span>
					</article>

					<article className='flex flex-col gap-y-[0.6rem]'>
						<h3 className='underline'>Redes</h3>
						<span className='text-[0.8rem]'>Facebook</span>
						<span className='text-[0.8rem]'>Twitter</span>
						<span className='text-[0.8rem]'>Instagram</span>
					</article>
				</div>
			</div>
		</footer>
	);
}
