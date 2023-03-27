import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const FormAirtable = () => {
    // handles the modal open and closing 
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }

    function openModal() {
      setIsOpen(true)
    }
    // form handling 
    const handleSubmit=(e)=>{
      e.preventDefault()
      const CommunityFormData=new FormData(e.currentTarget)
      const data=Object.fromEntries(CommunityFormData)
      toast.success(`Thank you ${data?.firstName} you will sent an email to join the community`,{
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
        <ToastContainer/>
        <button
          type="button"
          onClick={openModal}
          className="bg-orange-400 rounded-xl px-4 py-2 text-white"
        >
          Join Community
        </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {/* Please entire the following fields */}
                    <div className="flex justify-between">
                      <p> Please entire the following fields</p>
                      <button className='border rounded-lg p-1 hover:bg-purple-50' onClick={closeModal}> X</button>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                  <form className='text-black' onSubmit={handleSubmit}>
                        <div className="grid gap-2 w-ful max-w-md py-5 ">
                            <div>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" name="firstName" id="firstname" className="w-full rounded-lg focus:border-purple-500 text-black" required/>
                            </div>
                            <div>
                                <label htmlFor="secondname">Second Name</label>
                                <input type="text" name="secondName" id="secondname" className="w-full rounded-lg focus:border-purple-500 text-black" required/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="emailAddress" id="email" className="w-full rounded-lg focus:border-purple-500 text-black" required/>
                            </div>
                            <div>
                                <label htmlFor="phonemumber">Preferred Phone Number</label>
                                <input type="tel" name="phoneNumber" id="phonenumber" className="w-full rounded-lg focus:border-purple-500 text-black" required/>
                            </div>
                            <div>
                                <label htmlFor="School">Which School do you teach at?</label>
                                <input type="tel" name="school" id="School" className="w-full rounded-lg focus:border-purple-500 text-black" required/>
                            </div>
                            <div>
                                <label htmlFor="Benefit">How do you see yourself benefitting from from the Kinetic Teachers Community?</label>
                                <textarea name="benefit" id="Benefit" cols="30" rows="2" className="w-full rounded-lg focus:border-purple-500 text-black" required></textarea>
                            </div>
                            <div>
                                <button className='bg-orange-400 px-6 py-3 rounded-lg w-full'>Submit</button>
                            </div>
                        </div>
                    </form>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default FormAirtable