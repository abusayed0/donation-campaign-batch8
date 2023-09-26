import { useLoaderData } from "react-router-dom";
import { getPreDonationIdS } from "../../utilities/local-storage";
import { useEffect, useState } from "react";
import PreDonatedCard from "../../components/pre-donated-card/PreDonatedCard";

const Donation = () => {
    const [preDonations, setPreDonation] = useState([]);
    const allDonations = useLoaderData();
    
    useEffect(() => {
        const preDonationIds = getPreDonationIdS();
        const donations = [];
        preDonationIds.map(preDonationId => {
            const donation  = allDonations.find(singleDonation => singleDonation.id === preDonationId);
            donations.push(donation)
        });
        setPreDonation(donations);
        
    }, [allDonations]);
    return (
        <div className="max-w-[1320px] px-2 md:px-6 box-content mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                preDonations.map(preDonation => <PreDonatedCard
                 key={preDonation.id}
                 donationData={preDonation}
                />)
            }
        </div>
    );
};

export default Donation;