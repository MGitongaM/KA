// import { Form, redirect } from "react-router-dom"
import { useRef } from "react"
// import axios from "axios"

const AirtableForm = () => {
    const dialogRef=useRef()
    const openModal=()=>{dialogRef.current.showModal()}
    const onCancel=()=>{dialogRef.current.close()}
  return (
    <>
         <dialog ref={dialogRef} className='p-4 rounded-lg'>
        <form method="post" action="/community">
            <label htmlFor="FirstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
            <input type="text" name="firstname" id="FirstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "  required/>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="SecondName">Second Name</label>
            <input type="text" name="secondname" id="SecondtName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required/>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Email">Email</label>
            <input type="email" name="emailaddress" id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required/>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="PhoneNumber">Preferred Phone Number</label>
            <input type="tel" name="phonenumber" id="PhoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required/>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="School">Which School do you teach?</label>
            <input type="text" name="school" id="School" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required />
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Benefit">How do you see yourself benefitting from from the Kinetic Teachers Community? </label>
            <input type="text" name="benefit" id="Benefit" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required/>
            <div className="flex justify-evenly">
                <button className="bg-purple-300 rounded-lg px-4 py-2  mt-2 text-gray-800">Submit</button>
                <button className="bg-gray-500 rounded-lg px-4 py-2  mt-2 text-white" onClick={onCancel}>Close</button>
            </div>
            </form>
        </dialog>
        <button onClick={openModal} className="bg-orange-400 rounded-xl px-4 py-2 text-white">Join Community</button>
    </>
  )
}

export default AirtableForm

// export const communitySignupForm = async ({request})=>{
//     const data= await request.formData()
//     const fields={
//         "First Name":data.get('firstname'),
//         "Second Name ":data.get('secondname'),
//         "Email Address.":data.get('emailaddress'),
//         "Preferred Phone Number":data.get('phonenumber'),
//         "Which School do you teach?":data.get('school'),
//         "How do you see yourself benefitting from from the Kinetic Teachers Community?":data.get('benefit')
//     }
//     const headers={
//         'Authorization':'Bearer keyOoHuEFMlJwUjHS',
//         'Content-Type':'application/json'
//     }
//     axios.post(`https://api.airtable.com/v0/appXWo8MYm42PJoOw/Table%201`, fields,{headers:headers})
//     .then((resp)=>{console.log('success posting ')})
//     .catch((error)=>{console.log('error posting data')})
//     return redirect('/community')
// }
