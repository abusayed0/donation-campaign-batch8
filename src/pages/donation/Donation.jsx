import { useLoaderData } from "react-router-dom";
import { getPreDonationIdS } from "../../utilities/local-storage";
import { useEffect, useState } from "react";
import PreDonatedCard from "../../components/pre-donated-card/PreDonatedCard";

const Donation = () => {
    const [preDonations, setPreDonation] = useState([]);
    const [disPlayShowAll, setdisPlayShowAll] = useState(false);
    const [dataLength, setDataLength] = useState(0);
    const allDonations = useLoaderData();

    useEffect(() => {
        const preDonationIds = getPreDonationIdS();
        const donations = [];
        preDonationIds.map(preDonationId => {
            const donation = allDonations.find(singleDonation => singleDonation.id === preDonationId);
            donations.push(donation)
        });
        setPreDonation(donations);
        if(donations.length > 4){
            setdisPlayShowAll(true);
            setDataLength(4);
        }
        else{
            setDataLength(donations.length);
        }

    }, [allDonations]);

    const handleSeeAll = () => {
        setdisPlayShowAll(false);
        setDataLength(preDonations.length);
    };
    return (
        <div className="max-w-[1320px] px-2 md:px-6 box-content mx-auto mt-24 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    preDonations.slice(0, dataLength).map(preDonation => <PreDonatedCard
                        key={preDonation.id}
                        donationData={preDonation}
                    />)
                }
            </div>
            <div className={`mt-10 text-center ${disPlayShowAll ? "block" : "hidden"}`}>
                <button onClick={handleSeeAll} className="bg-[#8E44AD] text-white font-semibold px-6 py-3 rounded-lg">See All</button>
            </div>
        </div>
    );
};

export default Donation;