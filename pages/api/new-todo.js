import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
      const data = req.body;
      
      const client = await MongoClient.connect('mongodb+srv://sridharrajkumar47:ytNiLQirXnlCyFe7@cluster0.ewkea2j.mongodb.net/TODO?retryWrites=true&w=majority');

      const db = client.db();

      const todoCollections = db.collection('todo');

      const result = await todoCollections.insertOne(data);

      client.close();

      res.status(201).json({ message: 'Todo inserted' }); 
  }
}

export default handler;
