import { useEffect, useState } from "react";
import api from "../api/Axios";

export default function AdminDashboard() {
  const [content, setContent] = useState<any>({
    hero: { title: "", subtitle: "" }
  });

  useEffect(() => {
    api.get("/content").then(res => {
      if (res.data) setContent(res.data);
    });
  }, []);

  const handleSave = async () => {
    await api.put("/content", content);
    alert("Saved Successfully");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white p-6">

        <h2 className="text-2xl font-bold mb-10">
          Admin Panel
        </h2>

        <ul className="space-y-3 text-sm">
          <li className="font-semibold">Hero Section</li>
          <li>Pricing</li>
          <li>Amenities</li>
          <li>FAQ</li>
        </ul>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">

        <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl">

          <h2 className="text-2xl font-bold mb-6">
            Edit Hero Section
          </h2>

          {/* Hero Title */}
          <label className="block mb-2 font-medium">
            Hero Title
          </label>
          <input
            className="w-full border p-3 rounded mb-4"
            value={content.hero?.title || ""}
            onChange={e =>
              setContent({
                ...content,
                hero: { ...content.hero, title: e.target.value }
              })
            }
          />

          {/* Hero Subtitle */}
          <label className="block mb-2 font-medium">
            Hero Subtitle
          </label>
          <textarea
            className="w-full border p-3 rounded mb-6"
            value={content.hero?.subtitle || ""}
            onChange={e =>
              setContent({
                ...content,
                hero: { ...content.hero, subtitle: e.target.value }
              })
            }
          />

          <button
            onClick={handleSave}
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800"
          >
            Save Changes
          </button>

        </div>

      </main>

    </div>
  );
}
