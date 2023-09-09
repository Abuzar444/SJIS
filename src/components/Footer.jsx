const Footer = () => {
    return (
        <div className="w-full h-[20rem] bg-zinc-950">
            <div className="grid grid-cols-2 h-full w-full">
                <div className=" px-20 py-4 flex sm:flex-col gap-x-6  gap-y-8 text-white">
                    <p>+971 52 5252 706</p>
                    <p>+971 56 6181 832</p>
                    <p>+971 50 7841 076</p>
                    <p>www.alwazirtyping.com</p>
                    <p>alwazrityping@gmail.com</p>
                </div>
                <div className="flex sm:px-6 py-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14538.663844267843!2d54.485596055419926!3d24.358126000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e419ec9937d7d%3A0x6bbff70f9b75ea69!2sLazzat%20Kadah%20Restaurant!5e0!3m2!1sen!2s!4v1690623087399!5m2!1sen!2s" className="w-full h-full px-20"></iframe>
                </div>
            </div>
        </div>
    )
}
export default Footer