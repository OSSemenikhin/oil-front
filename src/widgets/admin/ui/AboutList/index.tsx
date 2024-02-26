import {
  Datagrid,
  DateField,
  List,
  TextField,
  SelectField,
  EditButton,
  DeleteButton,
} from 'react-admin';

export default function AboutList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="title" label="Пункт меню" />
        <TextField source="href" label="Путь (адрес)" />
        <TextField source="order" label="Порядок" />
        <SelectField label="Отображается в шапке" source="topBar" choices={[
          { id: 0, name: 'нет' },
          { id: 1, name: 'да' },
        ]} />
        <SelectField label="Опубликовано" source="published" choices={[
          { id: 0, name: 'нет' },
          { id: 1, name: 'да' },
        ]} />
        <DateField source="created_at" label="Дата создания" />
        <DateField source="updated_at" label="Дата редактирования" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
