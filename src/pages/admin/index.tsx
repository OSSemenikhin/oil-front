import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("@/widgets/admin"), { ssr: false });

export default function Admin() {
  return <AdminApp />;
}
