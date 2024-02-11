import React from "react";
import {
  IoMdWater,
  IoMdCheckbox,
  IoIosClipboard,
  IoMdStar,
  IoMdNotifications,
} from "react-icons/io";

export default function TransactionList() {
  const today = [
    {
      name: "Water Bill",
      status: "Unsuccessfully",
      price: "-$280",
    },
  ];

  const yesterday = [
    {
      name: "Income Salary Oct",
      status: "Pending",
      price: "+$1200",
    },
    {
      name: "Electric Bill",
      status: "Success",
      price: "-$480",
    },
    {
      name: "Income : Jane Transfers",
      status: "",
      price: "+$500",
    },
    {
      name: "Internet Bill",
      status: "Warning",
      price: "-$100",
    },
  ];

  const bgColors = (status) => {
    switch (status) {
      case "Success":
        return "bg-blue-500";

      case "Pending":
        return "bg-teal-400";

      case "Warning":
        return "bg-yellow-500";

      default:
        return "bg-red-500";
    }
  };

  const icons = (status) => {
    switch (status) {
      case "Success":
        return <IoMdCheckbox color="white" />;

      case "Pending":
        return <IoIosClipboard color="white" />;

      case "Warning":
        return <IoMdStar color="white" />;

      default:
        return <IoMdNotifications color="white" />;
    }
  };

  return (
    <section>
      <div className="mt-11">
        <h3>Today</h3>
        <div>
          {today.map((val, index) => (
            <div
              key={index}
              className="flex flex-row items-center border-b border-b-grey py-3"
            >
              <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <IoMdWater color="white" />
              </div>
              <div className="flex-1">
                <div className="text-lg font-medium">{val.name}</div>
                <div className="text-sm">{val.status}</div>
              </div>
              <div>
                <div className="text-red-600">{val.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h3>Yesterday</h3>
        <div>
          {yesterday.map((val, index) => (
            <div
              key={index}
              className="flex flex-row items-center border-b border-b-grey py-3"
            >
              <div
                className={`h-10 w-10 rounded-lg flex items-center justify-center mr-3 ${bgColors(
                  val.status
                )}`}
              >
                {icons(val.status)}
              </div>
              <div className="flex-1">
                <div className="text-lg font-medium">{val.name}</div>
                <div className="text-sm">{val.status}</div>
              </div>
              <div>
                <div className="text-red-600">{val.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
