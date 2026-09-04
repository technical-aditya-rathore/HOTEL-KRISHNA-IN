"use client";
import React, { useState } from 'react';

export default function AdminDashboard() {
  // Dummy data - Baad mein ise hum Database se connect karenge
  const [orders] = useState([
    { id: 1, name: "Rahul Kumar", phone: "9876543210", amount: "₹120", status: "Pending", screenshot: "https://via.placeholder.com/150" },
    { id: 2, name: "Sneha Singh", phone: "9988776655", amount: "₹240", status: "Confirmed", screenshot: "https://via.placeholder.com/150" },
  ]);

  return (
    <div className="admin-dashboard min-h-screen p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="admin-kicker">Hotel Krishna IN • Private workspace</p>
            <h1 className="text-3xl font-black">Owner dashboard</h1>
            <p className="admin-subtitle">Manage restaurant orders and today&apos;s menu.</p>
          </div>
          <button onClick={() => window.location.href = '/'} className="text-xs bg-gray-900 px-4 py-2 rounded-full border border-gray-800">Logout</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left: Orders List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="admin-section-title flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Recent Orders
            </h2>
            
            {orders.map((order) => (
              <div key={order.id} className="admin-order-card flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl overflow-hidden cursor-pointer border border-orange-500/30 hover:scale-110 transition">
                    <img src={order.screenshot} onError={(event) => { event.currentTarget.src = '/food-fallback.svg'; }} alt="Payment Proof" className="w-full h-full object-cover" title="Click to enlarge" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{order.name}</h3>
                    <p className="admin-order-meta">{order.phone} • {order.amount}</p>
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${order.status === 'Pending' ? 'bg-orange-500/10 text-orange-500' : 'bg-green-500/10 text-green-500'}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button className="admin-confirm flex-1 md:flex-none">Confirm</button>
                  <button className="admin-reject flex-1 md:flex-none">Reject</button>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Menu Management (Owner Flexibility) */}
          <div className="admin-menu-card p-8 h-fit sticky top-28">
            <h2 className="admin-section-title mb-6">Edit today&apos;s menu</h2>
            <div className="space-y-4">
              <div>
                <label className="admin-label">Main dish name</label>
                <input type="text" defaultValue="Royal Paneer Thali" className="admin-input w-full mt-1" />
              </div>
              <div>
                <label className="admin-label">Price (₹)</label>
                <input type="number" defaultValue="249" className="admin-input w-full mt-1" />
              </div>
              <div className="flex items-center gap-2 py-2">
                <input type="checkbox" defaultChecked className="accent-orange-500 h-4 w-4" />
                <span className="admin-check-label">Available for delivery</span>
              </div>
              <button className="admin-update w-full">
                Update website
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}