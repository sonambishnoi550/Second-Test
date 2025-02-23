import Image from "next/image";
import React from "react";

interface SliderProps {
    SliderNumber: string;
    componentClass: string;
    myClass: string;
    heading: string;
    spanHeading: any;
    description: string;
    SliderImage: string;
}
const SliderProps = ({
    SliderNumber,
    componentClass,
    myClass,
    heading,
    spanHeading,
    description,
    SliderImage,
}: SliderProps) => {
    return (
        <div className={`lg:min-w-[1440px] bg-light-black w-full ${componentClass}`}>
            <div
                className={`flex md:gap-[65px] gap-7 max-md:flex-col items-center container max-w-[1140px] mx-auto ${myClass}`}
            >
                <div className="flex flex-col max-w-[461px]">
                    <Image className="max-sm:max-w-[150px]" src={SliderNumber}
                        alt="number" width={297} height={182}
                    />
                    <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-sm:max-w-[350px] max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                        {heading}
                        <span className="bg-gradient-to-r to-pink from-sky bg-clip-text text-transparent"> {spanHeading}</span>
                    </h4>
                    <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 max-sm:max-w-[350px] text-white mt-4">
                        {description}
                    </p>
                </div>
                <Image src={SliderImage} alt="slider" width={614} height={417}
                    className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-sm:max-w-[350px] max-sm:h-[250px] max-lg:max-h-[417px]" />
            </div>
        </div>
    );
};

export default SliderProps;