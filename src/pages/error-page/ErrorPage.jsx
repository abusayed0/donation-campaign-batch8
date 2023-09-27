import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-3">
            <h3 className="text-3xl font-bold">Oops! Page Not Found.</h3>
            <button onClick={() => navigate("/")} className="bg-[#FF444A] px-3 py-1 font-semibold text-white">Go To Home</button>
        </div>
    );
};

export default ErrorPage;