import { useLoaderData } from "react-router-dom";
import HomePageBanner from "../../components/home-page-banner/HomePageBanner";
import DonationCard from "../../components/donation-card/DonationCard";

const Home = () => {
    const donatainDatas = useLoaderData();
    console.log(donatainDatas);
    return (
        <div>
            <HomePageBanner />
            <div className="max-w-[1320px] px-2 md:px-6 box-content mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    donatainDatas.map(donationData => <DonationCard
                     key={donationData.id}
                     donation={donationData}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;