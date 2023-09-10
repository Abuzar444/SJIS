const Footer = () => {
    const phoneContact = [
        {
            number: '+971 52 5252 706'
        },
        {
            number: '+971 50 7841 076'
        },
        {
            number: '+971 56 6181 832'
        }
    ]
    const emailContact = [
        {
            address: 'www.alwazirtyping.com'
        },
        {
            address: 'alwazrityping@gmail.com'
        },
        {
            address: 'location abudhabi'
        }
    ]
    return (
        <div className="w-full sm:h-[20rem] h-[30rem] bg-zinc-950 py-5">
            <div className="grid sm:grid-cols-2 h-full w-full align-element">
                <div className=" py-4 grid sm:grid-cols-2 gap-x-6  sm:gap-y-8 text-white text-center sm:text-left">
                    <div>
                        {phoneContact.map((cont, index) => <p key={index} className="sm:py-6 py-3 flex-wrap">{cont.number}</p>)}
                    </div>
                    <div>
                        {
                            emailContact.map((email, index) => <p key={index} className="sm:py-6 py-3 flex-wrap">{email.address}</p>)
                        }
                    </div>

                </div>
                <div className=" stats">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3634.6552776389176!2d54.50088907535494!3d24.358497978260385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDIxJzMwLjYiTiA1NMKwMzAnMTIuNSJF!5e0!3m2!1sen!2s!4v1694328550764!5m2!1sen!2s" className="w-full h-full" ></iframe>
                </div>
            </div>
        </div>
    )
}
export default Footer