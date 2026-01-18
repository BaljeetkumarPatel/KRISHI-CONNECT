export default function AdminDashboard() {
  const logout = () => {
    localStorage.removeItem("admin-token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-5 bg-white shadow rounded-lg border">
          <h2 className="font-bold text-xl">Total Users</h2>
          <p className="text-gray-600 mt-2">Coming soon...</p>
        </div>

        <div className="p-5 bg-white shadow rounded-lg border">
          <h2 className="font-bold text-xl">Total Jobs</h2>
          <p className="text-gray-600 mt-2">Coming soon...</p>
        </div>

        <div className="p-5 bg-white shadow rounded-lg border">
          <h2 className="font-bold text-xl">Messages / Requests</h2>
          <p className="text-gray-600 mt-2">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
