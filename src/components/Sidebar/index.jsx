import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import {
  BiGridAlt,
  BiCreditCardAlt,
  BiUser,
  BiCalculator,
} from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";

export default function Sidebar() {
  const menu = [
    { name: "Home", icon: <IoHomeOutline /> },
    { name: "Account", icon: <BiGridAlt /> },
    { name: "Cards", icon: <BiCreditCardAlt /> },
    { name: "Contacts", icon: <BiUser /> },
    { name: "Loan Calculator", icon: <BiCalculator /> },
    { name: "Setting", icon: <RiSettings5Line /> },
  ];

  const schedulePayments = ["Monthly Rent", "Food Payment", "Utility Bills"];

  return (
    <>
      <div className="h-screen border-r border-gray-200 w-64 px-9 space-y-20">
        <div className="flex flex-row items-center pt-14 text-2xl text-indigo-700">
          SkyeeBank
        </div>
        <div className="space-y-24">
          <div className="space-y-20">
            <div>
              <div className="mb-4 text-indigo-700">
                <h5>Menu</h5>
              </div>
              <ul className="space-y-7 ">
                {menu.map((val, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-center text-gray-400"
                  >
                    <div className="mr-5">{val.icon}</div>
                    <div>{val.name}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-7 text-indigo-700">Schedule Payment</div>
              <div className="space-y-7">
                {schedulePayments.map((val, index) => (
                  <div className="flex items-center text-gray-300">
                    <div className="h-4 w-4 border border-indigo-500 mr-4 rounded-full"></div>
                    {val}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
