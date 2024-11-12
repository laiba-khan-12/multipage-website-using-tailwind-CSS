// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fancy Website</title>
      </Head>
      <main className="font-poppins p-8 text-center">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-700 to-pink-400 text-white p-14 mb:p-24 rounded-lg mb-12 shadow-lg animate-fadeIn">
          <h1 className="text-5xl font-bold m-0 text-blue-300" >Welcome to Our Website</h1>
          <p className="text-xl mt-6 font-normal text-blue-300">Experience the blend of aesthetics and functionality.</p>
        </section>

        {/* About Section */}
        <section className="my-12 text-blue-300 p-8 bg-gradient-to-br from-purple-500 to-pink-300 rounded-lg shadow-md animate-fadeIn">
          <h2 className='text-4xl text-blue-700 mb-4 font-bold' >About Us</h2>
          <p className='max-w-xl mx-auto text-lg text-blue-700 leading-relaxed'>
            We are passionate about creating beautiful and functional websites that elevate your brand and meets with the need of people.
          </p>
        </section>

        {/* Services Section */}
        <section className="mt-16 bg-gray-100">
          <h2 className='text-4xl mb-8 font-bold'>Our Services</h2>
          <div className="flex flex-col gap-6 items-center md:flex-row md:justify-center">
            <div className="bg-gray p-10 rounded-lg shadow-lg max-w-sm w-full text-center transition-transform transform-gpu hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp">
              <h3 className='text-2xl mb-4 text-gray-800 '>Design</h3>
              <p className='text-base text-gray-500'>Crafting visually stunning designs that captivate and inspire peoples.</p>
            </div>
            <div className="bg-gray p-10 rounded-lg shadow-lg max-w-sm w-full text-center transition-transform transform-gpu hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp">
              <h3 className='text-2xl mb-4 text-gray-800 font-bold' >Development</h3>
              <p className='text-base text-gray-500' >Building responsive, websites tailored to your business.</p>
            </div>
            <div className="bg-gray p-10 rounded-lg shadow-lg max-w-sm w-full text-center transition-transform transform-gpu hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp">
              <h3 className='text-2xl mb-4 text-gray-800 font-bold' >Consulting</h3>
              <p className='text-base text-gray-500' >Providing expert guidancet in every step to help you achieve your digital goals.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
