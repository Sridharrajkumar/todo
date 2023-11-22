import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
        const client = await MongoClient.connect('mongodb+srv://sridharrajkumar47:ytNiLQirXnlCyFe7@cluster0.ewkea2j.mongodb.net/TODO?retryWrites=true&w=majority');

      const db = client.db();
      const data = req.body;
      const todoCollection = db.collection("todo");

      const result = await todoCollection.deleteOne({
        _id: new ObjectId(data.id),
      });

      client.close();

     
    } catch (error) {
      console.error("Error deleting todo:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } 
}

export default handler;
