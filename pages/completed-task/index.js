import { MongoClient } from "mongodb";
import Card from "../../component/Card/Card";
import TodoList from "../../component/Todo/TodoList";
import Head from "next/head";

const CompletedTask = (props) => {
  const filteredData = props.todo.filter((list) => {
    return list.viewed === true;
  });
  console.log(filteredData);
  return (
    <Card>
      <Head>
        <title>Completed Tasks</title>
      </Head>
      <TodoList todolist={filteredData} />
    </Card>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sridharrajkumar47:ytNiLQirXnlCyFe7@cluster0.ewkea2j.mongodb.net/TODO?retryWrites=true&w=majority"
  );

  const db = client.db();

  const todoCollections = db.collection("todo");

  const data = todoCollections.find().toArray();
  //console.log(data);
  return {
    props: {
      todo: (await data).map((list) => ({
        title: list.title,
        viewed: list.viewed,
      })),
    },
    revalidate: 2000,
  };
}

export default CompletedTask;
