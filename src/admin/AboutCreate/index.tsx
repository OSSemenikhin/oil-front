import { Create } from 'react-admin';
import AboutForm from 'admin/AboutForm';

export default function AboutCreate() {
  return (
    <Create>
      <AboutForm type="create" />
    </Create>
  );
};
