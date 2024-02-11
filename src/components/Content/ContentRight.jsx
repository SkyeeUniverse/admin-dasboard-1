import React from "react";
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import Businessman from "../../assets/businessman.jpg";
import Visa from "../../assets/visa.png";
import TransactionList from "./TransactionList";

export default function ContentRight() {
  return (
    <section className="w-96 bg-gray-100 rounded-tl-70px overflow-hidden px-8">
      <div className="pt-14 flex justify-end space-x-9 items-center">
        <GrNotification size={20} />
        <BiUser size={20} />
        <img
          src={Businessman}
          alt="user"
          className="h-9 w-9 object-cover rounded-full"
        />
      </div>
      <div className="card mt-6">
        <div className="relative p-5 text-white">
          <div className="text-lg">Tokyo</div>
          <div className="mt-10 space-y-2 ">
            <div>SkyeeBank Platinum</div>
            <div>4234 ... ... 5636</div>
            <div className="flex justify-between relative">
              <span>$3.675.23</span>
              <img src={Visa} alt="visa" className="h-4" />
            </div>
          </div>
        </div>
      </div>
      <button className="py-3 rounded border border-indigo-400 text-indigo-400 border-dashed w-full mt-10">
        Add new card
      </button>
      <TransactionList />
    </section>
  );
}
