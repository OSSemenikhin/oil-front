import { useParams } from 'react-router-dom';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput, useEditController } from 'react-admin';
import Markdown from 'features/Markdown';

export default function AboutEdit() {
  const { id } = useParams();
  console.log(id);
  // const { record, resource, save } = useEditController(props);
  // console.log((props.resource));

  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="menu" />
        <TextInput source="route" />
        <NumberInput source="topBar" />
        <DateInput source="created_at" />
        <DateInput source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};
