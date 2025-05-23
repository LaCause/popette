import AdminGalleryPage from "@/app/components/Admin/AdminGalleryPage/AdminGalleryPage";

export default function AdminGallery() {
  return (
    <div className="">
      <header className="text-center">
        <h1 className="text-3xl font-title text-on-surface font-semibold">
          Gestion de la galerie
        </h1>
        <p className="text-on-surface/70 mt-2 text-sm">
          Ajoutez, consultez et supprimez les photos visibles dans la galerie du
          site.
        </p>
      </header>

      <section className="bg-white rounded-xl shadow-md p-6">
        <AdminGalleryPage />
      </section>
    </div>
  );
}
