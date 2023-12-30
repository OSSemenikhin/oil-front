import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import AboutList from "./AboutList";
import AboutEdit from "./AboutEdit";
import AboutCreate from "./AboutCreate";

export default function AdminApp() {
const dataProvider = simpleRestProvider("http://oil.api/api");
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="about"
        list={AboutList}
        edit={AboutEdit}
        create={AboutCreate}
        recordRepresentation="id"
        options={{ label: 'Контент' }}
      />
    </Admin>
  )
};
