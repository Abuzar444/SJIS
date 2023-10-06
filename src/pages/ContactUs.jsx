import { useRef } from 'react'
import emailjs from '@emailjs/browser'
const ContactUs = () => {
    const form = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const results = await emailjs.sendForm(
                "D@war1234",
                "template_en7la4u",
                form.current,
                "VDyOHL6cqQi3Vx45S"
            )
            console.log(results.text)
            console.log('message sent')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="h-auto max-w-[90vw] mx-auto py-20">
            <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-32">
                <div className="leading-10">
                    <h3 className=" font-bold text-3xl">We get orders on Email</h3>
                    <p className="text-[1.05rem]">Please feel free to submit your order to us, and be sure to include all the necessary details about your work. We are committed to providing you with a prompt response as quickly as possible.
                        Additionally, if you have any specific requirements or questions, don't hesitate to include them in your message. Your input is valuable to us, and we look forward to assisting you effectively.</p>
                </div>
                <div className="w-full">
                    <form ref={form} onSubmit={handleSubmit} className="w-full h-auto rounded-xl flex flex-col bg-primary p-5 py-4">
                        <h3 className='text-center text-neutral font-bold text-3xl'>Contact Us</h3>
                        <label htmlFor="name" className="text-neutral">Name</label>
                        <input type="text" name="user_name" placeholder="SJIS" id="name" className="my-5 rounded-md py-2 px-2 outline-none" />
                        <label htmlFor="email" className="text-neutral">Email</label>
                        <input type="email" name="user_email" placeholder="SJIS@gmail.com" id="email" className="my-5 rounded-md py-2 px-2 outline-none" />
                        <label htmlFor="message" className="text-neutral">Message</label>
                        <textarea type="" name="message" placeholder="message us..." id="message" className="my-5 rounded-md py-2 px-2 outline-none" />
                        <button type='submit' className=' btn-neutral py-3 px-2 rounded-lg'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactUs