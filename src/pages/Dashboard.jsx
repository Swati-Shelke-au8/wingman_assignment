import React from "react";
import ChatWidget from "../components/ChatWidget";
import BarChartData from "../components/BarChartData";
import LineBarChart from "../components/LineBarChart";
import ProductDataTable from "../components/ProductDataTable";
import CardChart from "../components/CardChart";
import Forecast from "../components/Forecast";

function Dashboard() {
  return (
    <div
      className="w-full p-4 bg-white rounded shadow"
      style={{ padding: "20px" }}
    >
      <div className="flex flex-col md:flex-row p-4 gap-4">
        {/* Chat side panel */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">At a glance</h2>
          <CardChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-4 gap-4">
        <h2 className="text-lg font-semibold mb-2">Insight</h2>
      </div>
      <div className="flex flex-col md:flex-row p-4 gap-4">
        {/* Line Bar Chat side panel */}
        <div className="flex-1">
          {/* <h2 className="text-lg font-semibold mb-2">Consultation</h2> */}
          <LineBarChart />
        </div>

        {/* Bar Chat side panel */}
        <div className="flex-1">
          {/* <h2 className="text-lg font-semibold mb-2">Temperture Chart</h2> */}
          <BarChartData />
        </div>

        {/*  Forecast side panel */}
        <div className="flex-1">
          {/* <h2 className="text-lg font-semibold mb-2">Forecast</h2> */}
          <Forecast />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-4 gap-4">
        {/* Main (table) section */}
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-4">Orders</h1>
          {/* <DataTable /> */}
          <ProductDataTable />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-4 gap-4">
        {/* Chat side panel */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Chats</h2>
          <ChatWidget />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
