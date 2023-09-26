import { useLoaderData } from "react-router-dom";
import HomePageBanner from "../../components/home-page-banner/HomePageBanner";
import DonationCard from "../../components/donation-card/DonationCard";

const Home = () => {
    const dontainDatas = useLoaderData();
    return (
        <div>
            <HomePageBanner />
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    dontainDatas.map(donationData => <DonationCard
                     key={donationData.id}
                     donation={donationData}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;