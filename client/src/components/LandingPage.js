// // // // import { useState, useEffect } from 'react';
// // // // import { motion, useAnimation } from 'framer-motion';
// // // // import { useInView } from 'react-intersection-observer';
// // // // // Adjust Button import if it's located in a different path
// // // // // import { Button } from '../ui/button';  // Example, adjust as needed

// // // // export default function LandingPage() {
// // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setIsScrolled(window.scrollY > 50);
// // // //     };
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // //   }, []);

// // // //   const controls = useAnimation();
// // // //   const [ref, inView] = useInView();

// // // //   useEffect(() => {
// // // //     if (inView) {
// // // //       controls.start('visible');
// // // //     }
// // // //   }, [controls, inView]);

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
// // // //       <main className="pt-16">
// // // //         <motion.div
// // // //           initial="hidden"
// // // //           animate={controls}
// // // //           variants={{
// // // //             visible: { opacity: 1, y: 0 },
// // // //             hidden: { opacity: 0, y: 50 }
// // // //           }}
// // // //           transition={{ duration: 0.5 }}
// // // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24"
// // // //         >
// // // //           <div className="text-center">
// // // //             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
// // // //               Welcome to CareLink
// // // //             </h1>
// // // //             <p className="text-xl md:text-2xl text-gray-600 mb-8">
// // // //               Streamlining healthcare communication with AI-driven solutions
// // // //             </p>
// // // //             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
// // // //               Get Started
// // // //             </button>

// // // //           </div>
// // // //         </motion.div>

// // // //         <motion.div
// // // //           ref={ref}
// // // //           initial="hidden"
// // // //           animate={controls}
// // // //           variants={{
// // // //             visible: { opacity: 1, scale: 1 },
// // // //             hidden: { opacity: 0, scale: 0.8 }
// // // //           }}
// // // //           transition={{ duration: 0.5 }}
// // // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// // // //         >
// // // //           <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
// // // //             {/* Use img instead of Image for non-Next.js projects */}
// // // //             <img
// // // //               src="/placeholder.svg?height=500&width=1000"
// // // //               alt="Healthcare professionals using CareLink"
// // // //               className="rounded-lg w-full h-full object-cover"
// // // //             />
// // // //           </div>
// // // //         </motion.div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }



// // // import { useState, useEffect } from 'react';
// // // import { motion, useAnimation } from 'framer-motion';
// // // import { useInView } from 'react-intersection-observer';

// // // export default function LandingPage() {
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 50);
// // //     };
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const controls = useAnimation();
// // //   const [ref, inView] = useInView();

// // //   useEffect(() => {
// // //     if (inView) {
// // //       controls.start('visible');
// // //     }
// // //   }, [controls, inView]);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
// // //       <main className="pt-16">
// // //         {/* Hero Section */}
// // //         <motion.div
// // //           initial="hidden"
// // //           animate={controls}
// // //           variants={{
// // //             visible: { opacity: 1, scale: 1 },
// // //             hidden: { opacity: 0, scale: 0.8 },
// // //           }}
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

// // //         {/* Image Section */}
// // //         <motion.div
// // //           ref={ref}
// // //           initial="hidden"
// // //           animate={controls}
// // //           variants={{
// // //             visible: { opacity: 1, scale: 1 },
// // //             hidden: { opacity: 0, scale: 0.8 },
// // //           }}
// // //           transition={{ duration: 0.5 }}
// // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// // //         >
// // //           <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
// // //             <img
// // //               src="/placeholder.svg?height=500&width=1000"
// // //               alt="Healthcare professionals using CareLink"
// // //               className="rounded-lg w-full h-full object-cover"
// // //             />
// // //           </div>
// // //         </motion.div>

// // //         {/* Services Section */}
// // //         <motion.div
// // //           initial="hidden"
// // //           animate={controls}
// // //           variants={{
// // //             visible: { opacity: 1, y: 0 },
// // //             hidden: { opacity: 0, y: 50 },
// // //           }}
// // //           transition={{ duration: 0.6 }}
// // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// // //         >
// // //           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
// // //             Our Services
// // //           </h2>
// // //           <div className="flex flex-col items-center gap-8">
// // //             {['Telemedicine', 'Appointment Scheduling', 'Health Monitoring'].map((service, index) => (
// // //               <motion.div
// // //                 key={service}
// // //                 initial={{ opacity: 0, y: 50 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
// // //                 className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/3"
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

// // //         {/* Testimonials Section */}
// // //         <motion.div
// // //           initial="hidden"
// // //           animate={controls}
// // //           variants={{
// // //             visible: { opacity: 1, y: 0 },
// // //             hidden: { opacity: 0, y: 50 },
// // //           }}
// // //           transition={{ duration: 0.6 }}
// // //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// // //         >
// // //           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
// // //             What Our Clients Say
// // //           </h2>
// // //           <div className="flex justify-between gap-8">
// // //             {[ 
// // //               { quote: "CareLink has transformed the way we communicate with patients, making healthcare more accessible and efficient.", name: "Dr. John Doe", title: "Cardiologist" },
// // //               { quote: "The appointment scheduling system is seamless, and our patients love the convenience it offers.", name: "Sarah Lee", title: "Nurse" },
// // //               { quote: "CareLink's AI-powered monitoring tools have been invaluable in managing chronic conditions for our patients.", name: "David Smith", title: "Health Administrator" }
// // //             ].map((testimonial, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 initial={{ opacity: 0, y: 50 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
// // //                 className="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/3"
// // //               >
// // //                 <p className="text-gray-600 mb-4">{testimonial.quote}</p>
// // //                 <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
// // //                 <p className="text-gray-500">{testimonial.title}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </motion.div>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // import { useState, useEffect } from 'react';
// // import { motion, useAnimation } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';

// // export default function LandingPage() {
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const controls = useAnimation();
// //   const [ref, inView] = useInView();

// //   useEffect(() => {
// //     if (inView) {
// //       controls.start('visible');
// //     }
// //   }, [controls, inView]);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
// //       <main className="pt-16">
// //         {/* Hero Section */}
// //         <motion.div
// //           initial="hidden"
// //           animate={controls}
// //           variants={{
// //             visible: { opacity: 1, scale: 1 },
// //             hidden: { opacity: 0, scale: 0.8 },
// //           }}
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
// //           initial="hidden"
// //           animate={controls}
// //           variants={{
// //             visible: { opacity: 1, y: 0 },
// //             hidden: { opacity: 0, y: 50 },
// //           }}
// //           transition={{ duration: 0.6 }}
// //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// //         >
// //           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
// //             Our Services
// //           </h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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

// //         {/* Testimonials Section */}
// //         <motion.div
// //           initial="hidden"
// //           animate={controls}
// //           variants={{
// //             visible: { opacity: 1, y: 0 },
// //             hidden: { opacity: 0, y: 50 },
// //           }}
// //           transition={{ duration: 0.6 }}
// //           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
// //         >
// //           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
// //             What Our Clients Say
// //           </h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 quote:
// //                   'CareLink has transformed the way we communicate with patients, making healthcare more accessible and efficient.',
// //                 name: 'Dr. John Doe',
// //                 title: 'Cardiologist',
// //               },
// //               {
// //                 quote:
// //                   'The appointment scheduling system is seamless, and our patients love the convenience it offers.',
// //                 name: 'Sarah Lee',
// //                 title: 'Nurse',
// //               },
// //               {
// //                 quote:
// //                   "CareLink's AI-powered monitoring tools have been invaluable in managing chronic conditions for our patients.",
// //                 name: 'David Smith',
// //                 title: 'Health Administrator',
// //               },
// //             ].map((testimonial, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.2 }}
// //                 className="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
// //               >
// //                 <p className="text-gray-600 mb-4">{testimonial.quote}</p>
// //                 <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
// //                 <p className="text-gray-500">{testimonial.title}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </main>
// //     </div>
// //   );
// // }

// import { useState, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// export default function LandingPage() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const controls = useAnimation();
//   const { ref, inView } = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <main className="pt-16">
//         {/* Hero Section */}
//         <motion.div
//           initial="hidden"
//           animate={controls}
//           variants={{
//             visible: { opacity: 1, scale: 1 },
//             hidden: { opacity: 0, scale: 0.8 },
//           }}
//           transition={{ duration: 0.8 }}
//           ref={ref} 
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
//           initial="hidden"
//           animate={controls}
//           variants={{
//             visible: { opacity: 1, y: 0 },
//             hidden: { opacity: 0, y: 50 },
//           }}
//           transition={{ duration: 0.6 }}
//           ref={ref} 
//           className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
//         >
//           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//             Our Services
//           </h2>
//           <div className="flex flex-col items-center gap-8">
//             {['Telemedicine', 'Appointment Scheduling', 'Health Monitoring'].map((service, index) => (
//               <motion.div
//                 key={service}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/3"
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
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="pt-16">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.8 },
          }}
          transition={{ duration: 0.8 }}
          ref={ref}
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
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="flex flex-col items-center gap-8">
            {['Telemedicine', 'Appointment Scheduling', 'Health Monitoring'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/3"
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

        {/* Testimonial Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-col items-center gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'General Practitioner',
                testimonial: 'CareLink has made healthcare so much more accessible. The communication tools have been a game-changer for my patients.',
              },
              {
                name: 'John Doe',
                role: 'Patient',
                testimonial: 'Booking appointments and consulting with doctors through CareLink is incredibly easy and convenient. Highly recommended!',
              },
              {
                name: 'Emily White',
                role: 'Healthcare Administrator',
                testimonial: 'CareLink streamlines our processes, and the patient monitoring tools are incredibly helpful for managing patient care.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/3"
              >
                <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
