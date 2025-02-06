import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadComponetOne from "../componets/HeadComponetOne";
import HeaderOne from "../componets/HeaderOne";

const CommingSoon = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); // Countdown starts from 5 seconds

  useEffect(() => {
    // Timer to update countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redirect when countdown reaches zero
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000); // Redirects after 5 seconds

    // Cleanup the timers if the component unmounts
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col">
      <HeaderOne
        head={<HeadComponetOne text={`Coming Soon ... (${countdown}s)`} />}
      />
    </div>
  );
};

export default CommingSoon;
