import { MongoClient, ObjectId } from "mongodb";


async function handler(req, res) {

    const client = await MongoClient.connect('mongodb+srv://sridharrajkumar47:ytNiLQirXnlCyFe7@cluster0.ewkea2j.mongodb.net/TODO?retryWrites=true&w=majority');

    const db = client.db();

    const data = req.body;

    const todocollections = db.collection('todo');

    const response = await todocollections.updateOne(
        { _id: new ObjectId(data.id) },
        {
            $set: {
                title: data.title,
                viewed: data.viewed
        }}
    )

    client.close();
    
}

export default handler;

