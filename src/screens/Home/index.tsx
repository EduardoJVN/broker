import {FAVORITE_DATA, BALANCE_DATA, INCOME_DATA, EXPENSE_DATA} from "./Mock"
import FavoriteCard from "./components/ui/favorite-card";
import InvestmentsCard from "./components/investments-card";
import GeneralWidget from "./components/ui/general-widget";
import HorizontalScrollStatic from "./components/horizontal-scroll-static";
export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4">
        {/* favorite */}
        {/* <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-4 overflow-hidden"> */}

          {/* <div className=" bg-red flex flex-row gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar">
              {FAVORITE_DATA.map((item,index) => (
                <div key={index} className="flex-shrink-0">
                  <FavoriteCard data={item}  />
                </div>
              ))}
          </div> */}

        {/* <HorizontalScrollStatic data={FAVORITE_DATA} /> */}
        {/* </div> */}
        {/* favorite */}

        {/* wallet */}
        {/* <div className="flex flex-col md:flex-row gap-4 "> */}
        <div className="grid auto-rows-min gap-4 lg:grid-cols-3">
          {/* total balance */}
          <GeneralWidget data={BALANCE_DATA}/>

          {/* Income */}
          <GeneralWidget data={INCOME_DATA}/>
          
          {/* Expense */}
          <GeneralWidget data={EXPENSE_DATA}/>
          
        </div>
        {/* wallet */}

        {/* my investments */}
        <div className="flex flex-col gap-4">
            <InvestmentsCard/>   
        </div>
        {/* my investments */}

        {/* my orders */}
        <div className="flex flex-row gap-4">
            <InvestmentsCard/>   
        </div>
        {/* my orders */}
    </div>
  );
}