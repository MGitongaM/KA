import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const ReachOutSection = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const ReachOutFormData=new FormData(e.currentTarget)
        const data=Object.fromEntries(ReachOutFormData)
        toast.success(`Thank you ${data?.fullName}, we will get in touch with you`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    }
  return (
    <>
        <section className="bg-slate-800 bg-homeReachOutBg bg-cover bg-center bg-no-repeat bg-blend-overlay w-full h-screen font-nunito">
            <div className="text-center">
                <h2 className="text-white text-4xl py-10 font-medium">Reach out to us </h2>
            </div>
            <ToastContainer/>
            <div className="rounded-xl w-full max-w-lg mx-auto bg-orange-500 bg-opacity-10   px-6 py-3">
                <form className='text-white' onSubmit={handleSubmit}>
                    <div className="grid gap-5 w-ful max-w-md py-5 ">
                        <div>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name="fullName" id="fullname" className="w-full rounded-lg focus:border-purple-500 text-black" required/>
                        </div>
                        <div>
                            <label htmlFor="eamiladdress">Email Address</label>
                            <input type="email" name="emailAddress" id="emailaddress" className="w-full rounded-lg focus:border-purple-500 text-black" required/>
                        </div>
                        <div>
                            <label htmlFor="school">School</label>
                            <input type="text" name="school" id="school" className="w-full rounded-lg focus:border-purple-500 text-black" required/>
                        </div>
                        <div>
                            <label htmlFor="categorty">Under which category do you fall</label>
                            <select  name="category" id="category" className="w-full rounded-lg focus:border-purple-500 text-black" required>
                                <option value="">Select Category</option>
                                <option value="HeadTeacher/Director">HeadTeacher/Director</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Parent">Parent</option>
                                <option value="Student">Student</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="phonemumber">Phone Number</label>
                            <input type="tel" name="phonenumber" id="phonenumber" className="w-full rounded-lg focus:border-purple-500 text-black" required/>
                        </div>
                        <div>
                            <label htmlFor="message">Your Message</label>
                            <textarea name="mesaage" id="message" cols="30" rows="5" className="w-full rounded-lg focus:border-purple-500 text-black" required></textarea>
                        </div>
                        <div>
                            <button className='bg-orange-400 px-6 py-3 rounded-lg'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default ReachOutSection