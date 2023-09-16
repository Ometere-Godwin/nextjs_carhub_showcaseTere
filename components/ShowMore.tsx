'use client';
import { useRouter } from "next/navigation";
import { ShowMoreprops } from "../types";
import {CustomButton}  from '.';
import { updateSearchParams } from "../utils";

export default function ShowMore({pageNumber, isNext, setLimit} : ShowMoreprops) {
    // const newLimit = (pageNumber + 1) * 10;
    const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 10;

      setLimit(newLimit); 
        // const newPathName = updateSearchParams("limit", `${newLimit}`);
        // router.push(newPathName);
    }
    
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton 
            title = "Show More"
            containerStyle="bg-primary-blue rounded-full text-white"
            btnType="button"
            handleClick={handleNavigation}
            />
        )}
    </div>
  )
}
