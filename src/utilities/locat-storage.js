import toast from "react-hot-toast";

const getPreDonationIdS = () => {
    let donaitonIds = [];
    const preDonationIds = localStorage.getItem("donation-ids");
    if(preDonationIds){
        const preDonationIdsArr = JSON.parse(preDonationIds);
        donaitonIds = preDonationIdsArr;
    }
    return donaitonIds;
};
const addDonationIdInLS = id => {
    const preDonationIds = getPreDonationIdS();
        const newDonationIds = [...preDonationIds, id];
        localStorage.setItem("donation-ids", JSON.stringify(newDonationIds));
        toast.success('Successfully added!')
    
};

export default addDonationIdInLS;