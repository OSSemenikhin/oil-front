import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("admin"), { ssr: false });

export default function Admin() {
  return <AdminApp />;
}
