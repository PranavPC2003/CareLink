// // // // // import { useState, useEffect } from 'react';
// // // // // import { motion } from 'framer-motion';

// // // // // export default function LandingPage() {
// // // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setIsScrolled(window.scrollY > 50);
// // // // //     };
// // // // //     window.addEventListener('scroll', handleScroll);
// // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
// // // // //       <main className="pt-16">
// // // // //         {/* Hero Section */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, scale: 0.8 }}
// // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center"
// // // // //         >
// // // // //           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
// // // // //             Welcome to CareLink
// // // // //           </h1>
// // // // //           <motion.p
// // // // //             initial={{ opacity: 0, scale: 0 }}
// // // // //             animate={{ opacity: 1, scale: 1 }}
// // // // //             transition={{ duration: 1 }}
// // // // //             className="text-xl md:text-2xl text-gray-600 mb-8"
// // // // //           >
// // // // //             Streamlining healthcare communication with AI-driven solutions
// // // // //           </motion.p>
// // // // //           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
// // // // //             Get Started
// // // // //           </button>
// // // // //         </motion.div>

// // // // //         {/* Services Section */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 50 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.6 }}
// // // // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// // // // //         >
// // // // //           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
// // // // //             Our Services
// // // // //           </h2>
// // // // //           <div className="flex flex-col items-center gap-8">
// // // // //             {['Telemedicine', 'Appointment Scheduling', 'Health Monitoring'].map((service, index) => (
// // // // //               <motion.div
// // // // //                 key={service}
// // // // //                 initial={{ opacity: 0, y: 50 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ duration: 0.6, delay: index * 0.2 }}
// // // // //                 className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/3"
// // // // //               >
// // // // //                 <h3 className="text-xl font-bold mb-4">{service}</h3>
// // // // //                 <p className="text-gray-600">
// // // // //                   {service === 'Telemedicine' && 'Connect with doctors remotely for consultations and prescriptions.'}
// // // // //                   {service === 'Appointment Scheduling' && 'Easily book appointments with your healthcare provider at your convenience.'}
// // // // //                   {service === 'Health Monitoring' && 'Monitor your health status with AI-driven tools and real-time updates.'}
// // // // //                 </p>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useState, useEffect } from 'react';
// // // // import { motion } from 'framer-motion';

// // // // export default function LandingPage() {
// // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setIsScrolled(window.scrollY > 50);
// // // //     };
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // //   }, []);

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
// // // //       <main className="pt-16">
// // // //         {/* Hero Section */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, scale: 0.8 }}
// // // //           animate={{ opacity: 1, scale: 1 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center"
// // // //         >
// // // //           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
// // // //             Welcome to CareLink
// // // //           </h1>
// // // //           <motion.p
// // // //             initial={{ opacity: 0, scale: 0 }}
// // // //             animate={{ opacity: 1, scale: 1 }}
// // // //             transition={{ duration: 1 }}
// // // //             className="text-xl md:text-2xl text-gray-600 mb-8"
// // // //           >
// // // //             Streamlining healthcare communication with AI-driven solutions
// // // //           </motion.p>
// // // //           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
// // // //             Get Started
// // // //           </button>
// // // //         </motion.div>

// // // //         {/* Services Section */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 50 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// // // //         >
// // // //           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
// // // //             Our Services
// // // //           </h2>
// // // //           <div className="flex flex-wrap justify-center gap-8">
// // // //             {['Telemedicine', 'Appointment Scheduling', 'Health Monitoring'].map((service, index) => (
// // // //               <motion.div
// // // //                 key={service}
// // // //                 initial={{ opacity: 0, y: 50 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ duration: 0.6, delay: index * 0.2 }}
// // // //                 className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
// // // //               >
// // // //                 <h3 className="text-xl font-bold mb-4">{service}</h3>
// // // //                 <p className="text-gray-600">
// // // //                   {service === 'Telemedicine' && 'Connect with doctors remotely for consultations and prescriptions.'}
// // // //                   {service === 'Appointment Scheduling' && 'Easily book appointments with your healthcare provider at your convenience.'}
// // // //                   {service === 'Health Monitoring' && 'Monitor your health status with AI-driven tools and real-time updates.'}
// // // //                 </p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useState, useEffect } from 'react';
// // // import { motion } from 'framer-motion';

// // // export default function LandingPage() {
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 50);
// // //     };
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
// // //       <main className="pt-16">
// // //         {/* Hero Section */}
// // //         <motion.div
// // //           initial={{ opacity: 0, scale: 0.8 }}
// // //           animate={{ opacity: 1, scale: 1 }}
// // //           transition={{ duration: 0.8 }}
// // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center"
// // //         >
// // //           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
// // //             Welcome to CareLink
// // //           </h1>
// // //           <motion.p
// // //             initial={{ opacity: 0, scale: 0 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             transition={{ duration: 1 }}
// // //             className="text-xl md:text-2xl text-gray-600 mb-8"
// // //           >
// // //             Streamlining healthcare communication with AI-driven solutions
// // //           </motion.p>
// // //           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
// // //             Get Started
// // //           </button>
// // //         </motion.div>

// // //         {/* Services Section */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// // //         >
// // //           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
// // //             Our Services
// // //           </h2>
// // //           <div className="flex-container">
// // //             {['Telemedicine', 'Appointment Scheduling', 'Health Monitoring'].map((service, index) => (
// // //               <motion.div
// // //                 key={service}
// // //                 initial={{ opacity: 0, y: 50 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.6, delay: index * 0.2 }}
// // //                 className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
// // //               >
// // //                 <h3 className="text-xl font-bold mb-4">{service}</h3>
// // //                 <p className="text-gray-600">
// // //                   {service === 'Telemedicine' && 'Connect with doctors remotely for consultations and prescriptions.'}
// // //                   {service === 'Appointment Scheduling' && 'Easily book appointments with your healthcare provider at your convenience.'}
// // //                   {service === 'Health Monitoring' && 'Monitor your health status with AI-driven tools and real-time updates.'}
// // //                 </p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </motion.div>
// // //       </main>
// // //     </div>
// // //   );
// // // }


// // import { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';

// // export default function LandingPage() {
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
// //       <main className="pt-16">
// //         {/* Hero Section */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.8 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8 }}
// //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center"
// //         >
// //           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
// //             Welcome to CareLink
// //           </h1>
// //           <motion.p
// //             initial={{ opacity: 0, scale: 0 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1 }}
// //             className="text-xl md:text-2xl text-gray-600 mb-8"
// //           >
// //             Streamlining healthcare communication with AI-driven solutions
// //           </motion.p>
// //           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
// //             Get Started
// //           </button>
// //         </motion.div>

// //         {/* Services Section */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// //         >
// //           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
// //             Our Services
// //           </h2>
// //           <div className="grid grid-cols-3 gap-3 justify-center"> {/* Reduced gap between cards */}
// //             {['Telemedicine', 'Appointment Scheduling', 'Health Monitoring'].map((service, index) => (
// //               <motion.div
// //                 key={service}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.2 }}
// //                 className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
// //               >
// //                 <h3 className="text-xl font-bold mb-4">{service}</h3>
// //                 <p className="text-gray-600">
// //                   {service === 'Telemedicine' && 'Connect with doctors remotely for consultations and prescriptions.'}
// //                   {service === 'Appointment Scheduling' && 'Easily book appointments with your healthcare provider at your convenience.'}
// //                   {service === 'Health Monitoring' && 'Monitor your health status with AI-driven tools and real-time updates.'}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </main>
// //     </div>
// //   );
// // }


// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// export default function LandingPage() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <main className="pt-16">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
//             Welcome to CareLink
//           </h1>
//           <motion.p
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="text-xl md:text-2xl text-gray-600 mb-8"
//           >
//             Streamlining healthcare communication with AI-driven solutions
//           </motion.p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
//             Get Started
//           </button>
//         </motion.div>

//         {/* Services Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
//         >
//           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//             Our Services
//           </h2>
//           <div className="grid grid-cols-3 gap-3 justify-center"> {/* Reduced gap between cards */}
//             {['Telemedicine', 'Appointment Scheduling', 'Health Monitoring'].map((service, index) => (
//               <motion.div
//                 key={service}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <h3 className="text-xl font-bold mb-4">{service}</h3>
//                 <p className="text-gray-600">
//                   {service === 'Telemedicine' && 'Connect with doctors remotely for consultations and prescriptions.'}
//                   {service === 'Appointment Scheduling' && 'Easily book appointments with your healthcare provider at your convenience.'}
//                   {service === 'Health Monitoring' && 'Monitor your health status with AI-driven tools and real-time updates.'}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </main>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="pt-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to CareLink
          </h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Streamlining healthcare communication with AI-driven solutions
          </motion.p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            Get Started
          </button>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-3 gap-3 justify-center"> {/* Reduced gap between cards */}
            {['Telemedicine', 'Appointment Scheduling', 'Health Monitoring'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{service}</h3>
                <p className="text-gray-600">
                  {service === 'Telemedicine' && 'Connect with doctors remotely for consultations and prescriptions.'}
                  {service === 'Appointment Scheduling' && 'Easily book appointments with your healthcare provider at your convenience.'}
                  {service === 'Health Monitoring' && 'Monitor your health status with AI-driven tools and real-time updates.'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-3 gap-3 justify-center">
            {[
              {
                name: 'John Doe',
                role: 'Doctor',
                testimonial: 'CareLink has made communication with my patients so much easier. The system is intuitive and effective.',
              },
              {
                name: 'Jane Smith',
                role: 'Patient',
                testimonial: 'I love how easy it is to schedule appointments and get immediate medical advice through telemedicine!',
              },
              {
                name: 'Dr. Robert Lee',
                role: 'Specialist',
                testimonial: 'The health monitoring features are amazing. I can track my patients\' progress in real-time.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
