import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import AboutList from "./AboutList";
import AboutEdit from "./AboutEdit";

export default function AdminApp() {
const dataProvider = jsonServerProvider("http://oil.api/api");
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="about"
        list={AboutList}
        edit={AboutEdit}
        recordRepresentation="id"
        options={{ label: 'Контент' }}
      />
    </Admin>
  )
};
