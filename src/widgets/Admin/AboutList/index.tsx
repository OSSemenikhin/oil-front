import { Datagrid, DateField, List, TextField, useListContext } from 'react-admin';

export default function AboutList() {
  const constext = useListContext();
  // console.log(constext);
  return (
    <List>
      <Datagrid rowClick="edit">
        {/* <TextField source="id" /> */}
        <TextField source="menu" label="Пункт меню" />
        <TextField source="route" label="Путь (адрес)"/>
        <TextField source="topBar" label="Отображается в шапке"/>
        {/* <TextField source="content" /> */}
        <DateField source="created_at" label="Дата создания" />
        <DateField source="updated_at" label="Дата редактирования" />
      </Datagrid>
    </List>
  );
};
