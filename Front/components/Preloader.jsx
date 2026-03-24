import Lottie from "lottie-react";
import chefLoader from "../src/assets/animations/Chef (1).json";

function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#350f13] z-[9999] transition-opacity duration-700">
      
      <div className="w-80 h-80">
        <Lottie animationData={chefLoader} loop />
      </div>
    </div>
  );
}

export default Preloader;