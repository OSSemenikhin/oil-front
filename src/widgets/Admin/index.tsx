import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
console.log(dataProvider);

export default function AdminApp() {
  const getData = async () => {
    let x = await fetch('http://oil.api/api/test');
    x = await x.text();
    console.log(x);
  }

  getData();

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={ListGuesser}
        edit={EditGuesser}
        recordRepresentation="name"
      />
      {/* <Resource
        name="posts"
        list={ListGuesser}
        edit={EditGuesser}
        recordRepresentation="title"
      />
      <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
    </Admin>
  )
};
