import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getPreDonationIdS } from "../../utilities/local-storage";
import Chart from "react-google-charts";
const Statistics = () => {
    const totalDonations = useLoaderData();
    const [alreadyDonated, setAlreadyDonated] = useState([]);
    useEffect(() => {
        const preDonated = getPreDonationIdS();
        setAlreadyDonated(preDonated)
    }, []);
    // const data = [
    //     { name: "", value: alreadyDonated.length },
    //     { name: "Total Donation", value: totalDonations.length },
    // ];
    const data = [
        ["Task", "Hours per Day"],
        ["Your Donation", alreadyDonated.length],
        ["Total Donation", totalDonations.length],
      ];


    return (
        <div className="max-w-[1320px] px-2 md:px-6 box-content mx-auto mt-24">
            <Chart
                chartType="PieChart"
                data={data}
                width={"100%"}
                height={"500px"}
            />
        </div>
    );
};

export default Statistics;