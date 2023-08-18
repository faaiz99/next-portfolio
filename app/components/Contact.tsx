/* eslint-disable @typescript-eslint/no-unused-vars */


'use client'
import {
    Formik,
    ErrorMessage
} from 'formik';

import * as Yup from 'yup';

interface MessageFormValues {
    name: string,
    email: string,
    message: string
}



const messageSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long! Max length 100')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    message: Yup.string()
        .required('Required')
        .max(3000, 'Too Long! Max Length 3000')
});

const Contact: React.FC = () => {
    const initialValues: MessageFormValues = { name: "", email: "", message: "" }
    return (<>
        <div className="mt-12 mb-12" data-testid='contact'>
            <p className="text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl" >
                Let's
                <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-green-500 font-extrabold"> Connect</span>.
            </p>
        </div>
        <div className="flex flex-wrap justify-center md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row gap-4 " id="contact" >
            <div className="hover:shadow-lg hover:shadow-zinc-500 bg-zinc-900 p-8 rounded-3xl  h-auto w-96 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 gap-4">
                <Formik
                    initialValues={initialValues}
                    validationSchema={messageSchema}
                    onSubmit={async (values, actions) => {
                        console.log(values);
                        actions.setSubmitting(false)
                        fetch(window.origin+`/api/contact`, {
                            method: 'POST',
                            headers: {
                                Accept: 'application.json',
                                'Content-Type': 'application/json',
                                "Access-Control-Allow-Methods":"GET,POST",
                                "Access-Control-Allow-Credentials":"true",
                                "Access-Control-Allow-Origin": "*"
                                
                            },
                            referrerPolicy: "no-referrer",
                            
                            body: JSON.stringify(values),
                            cache: 'default'
                        })
                        actions.resetForm({
                            values: {
                                name: '',
                                email: '',
                                message: '',

                            }
                        })
                    }}
                >
                    {({
                        isSubmitting,
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <div className="mb-4">
                                <label htmlFor="name" className=" w-full  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.name} name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Sample Name"></input>
                                <ErrorMessage name="name" />

                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className=" w-full  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " placeholder="Sample@email.com"></input>
                                <ErrorMessage name="email" />


                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                <textarea id="message" onChange={handleChange} onBlur={handleBlur} value={values.message} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Write your thoughts here..."></textarea>
                                <ErrorMessage name="message" />
                            </div>

                            <div className="mt-6 flex justify-center ">
                                <button type="submit" disabled={isSubmitting} className="bg-zinc-100 w-32  text-zinc-950 text-md font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 " >Send</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    </>

    );
}

export default Contact;