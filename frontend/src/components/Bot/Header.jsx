export default function Header({ user, onLogout }) {
  return (
    <div className="bg-green-600 text-white p-4 flex justify-between shadow-md">
      <h1 className="text-xl font-bold">🌾 Krishi Mitra AI</h1>

      {user ? (
        <div>
          {user.name}
          <button
            onClick={onLogout}
            className="ml-3 bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <span>Guest</span>
      )}
    </div>
  );
}
