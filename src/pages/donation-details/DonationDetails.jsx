import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const { id: currentId } = useParams();
    const allDonations = useLoaderData();
    const currentDonation = allDonations.find(donation => donation.id === +currentId);
    const { id, thumbnail, title, description, donationAmount, colors } = currentDonation;
    const { textColorOrButtonBg } = colors;
    return (
        <div className="mt-20">
            <div className="relative">
                <img className="w-full rounded-lg" src={thumbnail} alt="" />
                <div className="bg-[rgba(11,11,11,0.50)] rounded-br-lg rounded-bl-lg absolute w-full bottom-0 p-7">
                    <button className="font-bold text-xl text-white px-6 py-4 rounded" style={{ backgroundColor: textColorOrButtonBg }}>Donate ${donationAmount}</button>
                </div>
            </div>
            <div className="mt-12">
                <h3 className="text-4xl font-bold">{title}</h3>
                <p className="mt-8">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;