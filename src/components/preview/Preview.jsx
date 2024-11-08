// import BuyButton from "../buttons/BuyButton";
// import DescriptionButton from "../buttons/DescriptionButton";
// import CategoryButton from "../buttons/CategoryButton";

import { Children } from "react";

function Preview(props) {
   const mappedChildren = Children.map(props.children, (child) => <>{child}</>);

   return (
      <section className="text-center min-h-[400px] w-full relative desktop:text-left">
         <div
            className={`${props.phoneBg} min-h-[360px] bg-repeat bg-center bg-cover desktop:${props.desktopBg} desktop:min-h-[650px] forBtn:h-[700px]`}
         ></div>
         <div className="mt-8 desktop:absolute desktop:bottom-14 desktop:left-20">
            <h2 className="text-black text-5xl mb-6 uppercase desktop:text-7xl desktop:font-semibold desktop:w-[930px] desktop:leading-tight">
               {props.title}
            </h2>
            <h3 className="text-black text-3xl mb-6 uppercase desktop:text-4xl desktop:font-medium">
               {props.subtitle}
            </h3>
            <div className="flex justify-center gap-5 flex-wrap content-center  max-w-[800px] my-0 mx-auto desktop:m-0 desktop:justify-start ">
               {/* <CategoryButton category={"Для дітей"} />
               <BuyButton />
               <DescriptionButton /> */}
               {mappedChildren}
            </div>
         </div>
      </section>
   );
}

export default Preview;
