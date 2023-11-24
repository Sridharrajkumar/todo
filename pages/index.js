import Head from "next/head";
import Todoform from "../component/Todo/Todoform";
import { MongoClient } from "mongodb";
import TodoList from "../component/Todo/TodoList";
import Card from "../component/Card/Card";

export default function Home(props) {
  const addTodoHandler = async (data) => {
    const response = await fetch("/api/new-todo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const filteredData = props.todolist.filter(list => {
    return list.viewed === false;
  })
  //console.log(filteredData);
  return (
    <Card>
      <Head>
        <title>TodoList</title>
      </Head>
      <TodoList todolist={filteredData} />
      <Todoform addTodoHandler={addTodoHandler} />
    </Card>
  );
}


export async function getStaticProps() {
  
  const client = await MongoClient.connect('mongodb+srv://sridharrajkumar47:ytNiLQirXnlCyFe7@cluster0.ewkea2j.mongodb.net/TODO?retryWrites=true&w=majority');

  const db = client.db();

  const todoCollections =  db.collection('todo');

  const data = await todoCollections.find().toArray();

  await client.close();

  console.log(data);

  return {
    props: {
      todolist: data.map(list => ({
        title: list.title,
        id: list._id.toString(),
        viewed: list.viewed
      }))
    },
    revalidate: 2000,
  };
}

