import Companyİmg from "../assets/Company.jpg";

const AboutCompany = () => {
    return (
        <div className="bg-bgGreen p-32 flex flex-col gap-10 w-full rounded-[4%] mt-10">
            <div className="space-y-4">
                <h2 className="text-5xl  font-company text-customGreen uppercase ">About the Coffeeshop Company<span className="text-xl align-text-top">® </span></h2>
                <p className=" text-2xl font-sans">We provide you with your daily 'ME Moment'. Amidst the hustle and bustle of city life, a visit to one of our Coffeeshops offers relaxation and inspiration at the same time. With the combination of a pleasant atmosphere and an urban backdrop, we create a setting in which you become the main character.
                </p>
            </div>
            <div className="flex gap-10 w-full ">
                <img src={Companyİmg} className="rounded-2xl min-w-[70%]  object-cover" />
                <img src={Companyİmg} className="rounded-2xl min-w-[25%] object-cover" />
            </div>
        </div>
    )
}

export default AboutCompany