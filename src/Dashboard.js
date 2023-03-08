import React from "react";
import Card from "./Card";

function Dashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
        <Card title="Monthly Earnings" value="40,000" color="primary" />
        <Card title="Total Products" value="50" color="info" />
        <Card title="Total Users" value="40" color="success" />
        <Card title="Online Users" value="10" color="warning" />
      </div>
    </>
  );
}

export default Dashboard;
