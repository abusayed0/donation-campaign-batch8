import { useLoaderData, useParams } from "react-router-dom";
import addDonationIdInLS from "../../utilities/locat-storage";
import { Toaster } from "react-hot-toast";

const DonationDetails = () => {
    const { id: currentId } = useParams();
    const allDonations = useLoaderData();
    const currentDonation = allDonations.find(donation => donation.id === +currentId);
    const { id, thumbnail, title, description, donationAmount, colors } = currentDonation;
    const { textColorOrButtonBg } = colors;
    const handleDonate = () => {
        addDonationIdInLS(id);
    }
    return (
        <div className="max-w-[1320px] px-2 md:px-6 box-content mx-auto mt-20">
            <div className="relative">
                <img className="w-full h-[300px] md:h-[600px] rounded-lg" src={thumbnail} alt="" />
                <div className="bg-[rgba(11,11,11,0.50)] rounded-br-lg rounded-bl-lg absolute w-full bottom-0 p-4 md:p-7">
                    <button onClick={handleDonate} className="font-bold text-xl text-white px-4 md:px-6 py-2 md:py-4 rounded" style={{ backgroundColor: textColorOrButtonBg }}>Donate ${donationAmount}</button>
                    <Toaster
                        position="bottom-right"
                        reverseOrder={false}
                    />
                </div>
            </div>
            <div className="mt-12">
                <h3 className="text-2xl md:text-4xl font-bold">{title}</h3>
                <p className="mt-8">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;