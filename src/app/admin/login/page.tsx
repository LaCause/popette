import AdminLoginPage from "@/app/components/Admin/AdminLoginPage/AdminLoginPage";

export default function AdminLogin() {
  return (
    <main className="screen flex items-center justify-center bg-tertiary-container px-4 py-12">
      <div className="w-full max-w-sm space-y-6 border border-gray-200 bg-white p-6 shadow-sm">
        <AdminLoginPage />
      </div>
    </main>
  );
}
