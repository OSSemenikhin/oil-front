import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("widgets/Admin"), { ssr: false });

export default function Admin() {
  return <AdminApp />;
}
