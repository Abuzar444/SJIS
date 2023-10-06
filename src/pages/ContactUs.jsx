const ContactUs = () => {
    return (
        <div className="h-auto max-w-[90vw] mx-auto py-20">
            <div className="grid md:grid-cols-2 grid-cols-1 place-items-center h-full gap-32">
                <div className="leading-10">
                    <h3 className=" font-bold text-3xl">We get orders on Email</h3>
                    <p className="text-[1.05rem]">Please feel free to submit your order to us, and be sure to include all the necessary details about your work. We are committed to providing you with a prompt response as quickly as possible.
                        Additionally, if you have any specific requirements or questions, don't hesitate to include them in your message. Your input is valuable to us, and we look forward to assisting you effectively.</p>
                </div>
                <div className="">
                    <form className="w-[500px] h-[400px] rounded-xl flex flex-col bg-primary p-5 py-4">
                        <label htmlFor="name" className="text-neutral">Name</label>
                        <input type="text" name="name" placeholder="SJIS" id="name" className="my-5 rounded-md py-2 px-2 outline-none" />
                        <label htmlFor="email" className="text-neutral">Email</label>
                        <input type="email" name="email" placeholder="SJIS@gmail.com" id="email" className="my-5 rounded-md py-2 px-2 outline-none" />
                        <label htmlFor="message" className="text-neutral">Message</label>
                        <textarea type="" name="message" placeholder="message us..." id="message" className="my-5 rounded-md py-2 px-2 h-40 outline-none" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactUs