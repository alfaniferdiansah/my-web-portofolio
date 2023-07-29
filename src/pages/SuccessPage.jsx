import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../assets/animation_lknsbefb.json";

const style = {
    height: 300
  };
  
  const Success = () => {
    const options = {
      animationData: animationData,
      loop: true,
      autoplay: true,
    };
  
    const { View } = useLottie(options, style);
  
    return (
      <div>
        {View}
        <h3 className="notification-title">
          Your message sent successful 😍
        </h3>
      </div>
    );
  };

  export default Success;
  