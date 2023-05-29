import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { useState } from "react";
import { appRoutesObj } from "src/app.paths";
import { NavLink } from "react-router-dom";
import i18n from "src/core/configs/i18n";

interface IRoutes {
  routeTitle: string;
  pageRoute: string;
}
const routes: IRoutes[] = [
  {
    routeTitle: "nav.bar.home.page",
    pageRoute: appRoutesObj.getBasePath(),
  },
  {
    routeTitle: "nav.bar.contact.us",
    pageRoute: appRoutesObj.getContactPagePath(),
  },
  {
    routeTitle: "nav.bar.about.us",
    pageRoute: appRoutesObj.getAboutUsPagePathUrl(),
  },
];
const changeLanguage = ( )=> {
    if(i18n.language === "ar"){
        i18n.changeLanguage("en");
        localStorage.setItem("language" , "en")
    }else{
i18n.changeLanguage("ar")
localStorage.setItem("language" , "ar")

    }
}
function Navbar() {
  const [open, setOpen] = useState<Boolean>(false);
  const { t } = useTranslation();
  return (
    <div className="container  mx-auto flex justify-center items-start sm:justify-start pt-[85px] sm:pt-0">
      <div
        className={`flex sm:flex-col sm:h-screen sm:w-1/2 h-[72px] w-[1120px] container bg-gradient-to-r from-lightBlue to-darkBlue rounded-[8px] sm:rounded-none  items-center justify-between px-[16px] sm:justify-start gap-[50px] sm:items-start sm:pt-[57px] ${
          open ? "" : "sm:hidden"
        }`}
      >
        <div className="flex justify-end items-end w-full 2xl:hidden  xl:hidden lg:hidden md:hidden ">
          <AiOutlineClose
            onClick={() => setOpen(false)}
            className=" text-[30px] text-whiteColor"
          />
        </div>
        <div className="flex justify-center items-center gap-[57px] sm:flex-col">
          <div className="">
            <img src="../assets/images/Group 48095593.png" alt=""></img>
          </div>
          <nav className="flex gap-[29px] font-subTitle sm:flex-col">
            {routes.map((items, index) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-origin" : "text-whiteColor"
                  }
                  key={index}
                  to={items.pageRoute}
                >
                  <h2> {t(items.routeTitle)}</h2>
                </NavLink>
              );
            })}
          </nav>
        </div>
        <div onClick={()=> {changeLanguage()}} className="flex justify-center items-center w-[108px] h-[32px]  bg-whiteColor rounded-[8px] text-origin">
          {t("home.page.English")}
        </div>
      </div>
      {open ? (
        <div></div>
      ) : (
        <GiHamburgerMenu
          onClick={() => setOpen(true)}
          className="text-[30px] text-black 2xl:hidden xl:hidden lg:hidden md:hidden"
        />
      )}
    </div>
  );
}

export default Navbar;
