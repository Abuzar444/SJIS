const Footer = () => {
    return (
        <div className="w-full sm:h-[20rem] h-[30rem] bg-zinc-950 ">
            <div className="grid sm:grid-cols-2 h-full w-full align-element">
                <div className=" py-4 grid sm:grid-cols-2 gap-x-6 gap-6  sm:gap-y-8 text-white text-center sm:text-left">
                    <p>+971 52 5252 706</p>
                    <p>+971 56 6181 832</p>
                    <p>+971 50 7841 076</p>
                    <p>www.alwazirtyping.com</p>
                    <p>alwazrityping@gmail.com</p>
                    <p>location abudhabi</p>
                </div>
                <div className="flex  py-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3634.6552776389176!2d54.50088907535494!3d24.358497978260385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDIxJzMwLjYiTiA1NMKwMzAnMTIuNSJF!5e0!3m2!1sen!2s!4v1694328550764!5m2!1sen!2s" className="w-full stats" ></iframe>
                </div>
            </div>
        </div>
    )
}
export default Footer