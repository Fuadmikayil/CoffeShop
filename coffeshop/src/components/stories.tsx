import Storyİmg from "../assets/story.jpg"
const Stories = () => {
    return (
        <div>
            <div className="space-y-4 container p-10 py-20">
                <h2 className="text-5xl  font-company uppercase tracking-wide ">Stories</h2>
                <p className=" text-2xl font-sans w-[800px]">Every coffee we serve has its own story - and so does our Brand Coffeeshop Company®. From our humble beginnings to our global success, we have numerous remarkable milestones and inspiring stories to share.
                </p>
                <div>
                    <div className='w-[300px] h-[320px] overflow-hidden rounded-2xl  cursor-pointer group mt-10'>
                        <img src={Storyİmg} alt="" className=' transition-all duration-600 rounded-2xl group-hover:scale-110' />
                    </div>
                    <h2 className='text-2xl mt-3 ml-5'>ME-Moment</h2>
                </div>
            </div>
        </div>
    )
}

export default Stories