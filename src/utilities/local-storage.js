import toast from "react-hot-toast";

export const getPreDonationIdS = () => {
    let donaitonIds = [];
    const preDonationIds = localStorage.getItem("donation-ids");
    if (preDonationIds) {
        const preDonationIdsArr = JSON.parse(preDonationIds);
        donaitonIds = preDonationIdsArr;
    }
    return donaitonIds;
};
const addDonationIdInLS = id => {
    const preDonationIds = getPreDonationIdS();
    const exits = preDonationIds.find(preDonationId => preDonationId === id);
    if (exits) {
        toast.error("Already added.");
    }
    else {
        const newDonationIds = [id, ...preDonationIds];
        localStorage.setItem("donation-ids", JSON.stringify(newDonationIds));
        toast.success("Donation successful.")
    }

};

export default addDonationIdInLS;