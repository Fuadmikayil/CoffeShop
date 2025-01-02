import coffeeshopcompanyVideo from "../assets/coffeeshopcompanyVideo.mp4";

const HomeVideo = () => {
  return (
    <div className="flex justify-center gap-5 flex-col items-center  rounded-3xl mx-3 my-10 py-10 bg-bg2Green">
      <h2 className="text-6xl p-5 font-company">From Vienna with Love</h2>
      <video className="w-[60%]" controls  >
        <source src={coffeeshopcompanyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeVideo;
