import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSession } from 'next-auth/react';

interface PortfolioFormValues {
  name: string;
  duration: string;
  cap: string;
  country: string;
  tag?: string;
  info?: string;
}

const portfolioSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  duration: Yup.string()
    .required('Please select an option')
    .oneOf(['short', 'mid', 'long'], 'Invalid duration'),
  cap: Yup.string()
    .required('Please select an option')
    .oneOf(['small', 'mid', 'large', 'flexi'], 'Invalid cap'),
  country: Yup.string()
    .required('Please select an option')
    .oneOf(['India', 'US', 'China'], 'Invalid country'),
  tag: Yup.string(),
  info: Yup.string(),
});


export default function AddPortfolioPage() {
    const session = useSession();
    return (
        <div>
            {!session.data ? (
                <>
                    <button onClick={() => signIn('google')}
                        className='bg-green-500 text-white rounded-md px-3 py-2 text-sm font-medium'>Sign in</button>
                </>
                ) : (
                <div className='flex justify-center items-center'>
                    <AddPortfolioForm/>
                </div>
            )}
        </div>
    )
}

function AddPortfolioForm () {
    
  const initialValues: PortfolioFormValues = {
    name: '',
    duration: '',
    cap: '',
    country: '',
    tag: '',
    info: '',
  };

  const handleSubmit = (values: PortfolioFormValues) => {
    console.log('Form data:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={portfolioSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Portfolio Form</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Field
              name="name"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
              Duration
            </label>
            <Field as="select" name="duration" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500">
              <option value="" label="Select duration" />
              <option value="short" label="Short" />
              <option value="mid" label="Mid" />
              <option value="long" label="Long" />
            </Field>
            <ErrorMessage name="duration" component="div" className="text-red-600 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="cap" className="block text-sm font-medium text-gray-700">
              Cap
            </label>
            <Field as="select" name="cap" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500">
              <option value="" label="Select cap" />
              <option value="small" label="Small" />
              <option value="mid" label="Mid" />
              <option value="large" label="Large" />
              <option value="flexi" label="Flexi" />
            </Field>
            <ErrorMessage name="cap" component="div" className="text-red-600 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <Field as="select" name="country" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500">
              <option value="" label="Select country" />
              <option value="India" label="India" />
              <option value="US" label="US" />
              <option value="China" label="China" />
            </Field>
            <ErrorMessage name="country" component="div" className="text-red-600 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
              Tag
            </label>
            <Field
              name="tag"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
            />
            <ErrorMessage name="tag" component="div" className="text-red-600 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="info" className="block text-sm font-medium text-gray-700">
              Info
            </label>
            <Field as="textarea" name="info" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500" />
            <ErrorMessage name="info" component="div" className="text-red-600 text-sm" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};


// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


// import { useFormik } from "formik";
// import * as Yup from "yup";

// // Yup schema to validate the form
// const schema = Yup.object().shape({
//   name: Yup.string().required(),
//   email: Yup.string().required().email(),
//   password: Yup.string().required().min(7),
// });

// const portfolioSchema = Yup.object({
//     name: Yup.string().required(),
//     duration: Yup.string()
//       .required('Please select an option')
//       .oneOf(['short', 'mid','long'], 'Invalid duration'),
//     cap: Yup.string()
//       .required('Please select an option')
//       .oneOf(['small', 'mid', 'large', 'flexi'], 'Invalid cap'),
//     country: Yup.string()
//       .required('Please select an option')
//       .oneOf(['India', 'US', 'China'], 'Invalid country'),
//     tag: Yup.string(),
//     info: Yup.string()
//   });

// // export default 
// function AddPortfolioPage_new() {
//   // Formik hook to handle the form state
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//     },

//     // Pass the Yup schema to validate the form
//     validationSchema: schema,

//     // Handle form submission
//     onSubmit: async ({ name, email, password }) => {
//       // Make a request to your backend to store the data
//     },
//   });

//   // Destructure the formik object
//   const { errors, touched, values, handleChange, handleSubmit } = formik;

//   return (
//     <form onSubmit={handleSubmit} method="POST">
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         name="name"
//         value={values.name}
//         onChange={handleChange}
//         id="name"
//       />
//       {errors.name && touched.name && <span>{errors.name}</span>}

//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         name="email"
//         value={values.email}
//         onChange={handleChange}
//         id="email"
//       />
//       {errors.email && touched.email && <span>{errors.email}</span>}

//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//         id="password"
//       />
//       {errors.password && touched.password && <span>{errors.password}</span>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };


// export default function AddPortfolioPage() {




//     return <div className='flex justify-center items-center'>

//         <AddPortfolioForm/>
//     </div>
// }




// function AddPortfolioForm() {
//     const formik = useFormik({
//         initialValues: {
//           name: "",
//           email: "",
//           password: "",
//         },
    
//         // Pass the Yup schema to validate the form
//         validationSchema: portfolioSchema,
    
//         // Handle form submission
//         onSubmit: async ({ name, email, password }) => {
//           // Make a request to your backend to store the data
//         },
//       });
//       const { errors, touched, values, handleChange, handleSubmit } = formik;

//   return (
//     <form>
//       <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Add Portfolio</h2>
          

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
//                 Portfolio Name
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
//                   <input

//                     id="name"
//                     value={values.name}
//                     onChange={handleChange}
//                     name="name"
//                     type="text"
//                     placeholder="janesmith"
//                     autoComplete="username"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
//                 Duration
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="duration"
//                   name="duration"
//                   autoComplete="duration-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option value="short">Short Term</option>
//                   <option>Mid Term</option>
//                   <option>Long Term</option>
//                 </select>
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//                 Country
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option value="US">United States</option>
//                   <option value="India">India</option>
//                   <option value="China">China</option>
//                 </select>
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="cap" className="block text-sm font-medium leading-6 text-gray-900">
//                 Cap
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="cap"
//                   name="cap"
//                   autoComplete="cap-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option></option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>
//             </div>
//             <div className="col-span-full">
//               <label htmlFor="info" className="block text-sm font-medium leading-6 text-gray-900">
//                 Info
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="info"
//                   name="info"
//                   value={values.info}
//                   onChange={handleChange}
//                   rows={3}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">Any Additional info for the portfolio.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   )
// }
