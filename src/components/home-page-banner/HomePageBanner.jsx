
const HomePageBanner = ({handleDisplayDatas}) => {
    return (
        <div className="mt-20  py-10 px-2 md:px-6 md:h-[500px] text-center flex flex-col justify-center bg-[url('https://i.ibb.co/WDF8yS4/larm-rmah-AEa-TUnvneik-unsplash.jpg/')] bg-cover bg-center bg-no-repeat bg-[rgba(255,255,255,0.90)] bg-blend-overlay">
            <h2 className="text-3xl md:text-5xl font-bold">I Grow By Helping People In Need</h2>
            <form onSubmit={handleDisplayDatas} className="mt-8">
                <div className="relative w-full max-w-[500px] mx-auto">
                    <input type="text" name="category" className="border border-[#DEDEDE] rounded-lg p-3 w-full" placeholder="Search here...."/>
                    <button type="submit" className="bg-[#FF444A] font-semibold px-4 md:px-7 text-white rounded-r-lg absolute h-full right-0 top-0">Search</button>
                </div>
            </form>
        </div>
    );
};

export default HomePageBanner;