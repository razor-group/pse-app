import React from 'react';
import Lottie from 'react-lottie';
import Loader from "../../assets/Loader.json";

function LottiePlayer({lottieFile: lottie = Loader}){

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={100} width={240} />
    </div>
  );
};

export default LottiePlayer;
