import { useParams, useNavigate } from "react-router-dom";
import { Edit, useGetOne } from 'react-admin';
import AboutForm from '@/admin/pages/AboutForm';

export default function AboutEdit() {
  const { id } = useParams();
  const { isLoading, data } = useGetOne("about", { id });

  if (isLoading) return null;

  return (
    <Edit>
      <AboutForm type="edit" record={{ ...data, }}/>
    </Edit>
  );
};
