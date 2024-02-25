import { Create } from 'react-admin';
import AboutForm from '@/widgets/admin/ui/AboutForm';

export default function AboutCreate() {
  return (
    <Create>
      <AboutForm type="create" />
    </Create>
  );
};
