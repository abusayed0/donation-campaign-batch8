import { useLoaderData } from "react-router-dom";
import HomePageBanner from "../../components/home-page-banner/HomePageBanner";
import DonationCard from "../../components/donation-card/DonationCard";
import { useState } from "react";

const Home = () => {
    const donatainDatas = useLoaderData();
    // console.log(donatainDatas);
    const [displayDatas, setDisplayDatas] = useState(donatainDatas);
    const handleDisplayDatas = (e) => {
            const searchCategory = e.target.category.value;
            console.log(searchCategory);
            e.preventDefault();
            const searchCategoryDatas = donatainDatas.filter(donationData => donationData.category.toLowerCase() === searchCategory.toLowerCase());
            setDisplayDatas(searchCategoryDatas);
    };
    return (
        <div>
            <HomePageBanner handleDisplayDatas={handleDisplayDatas}/>
            <div className="max-w-[1320px] px-2 md:px-6 box-content mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    displayDatas.map(donationData => <DonationCard
                     key={donationData.id}
                     donation={donationData}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;