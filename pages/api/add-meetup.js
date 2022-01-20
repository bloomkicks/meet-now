import { MongoClient } from "mongodb";

const clusterURI =
  "mongodb+srv://boba:bobapassword@nextmeetups.kfxp6.mongodb.net/NextMeetups?retryWrites=true&w=majority";

const handler = async (req, res) => {
  if (req.method.toUpperCase() !== "POST") return;
  const data = req.body

  const client = await MongoClient.connect(clusterURI)

  const db = client.db('NextMeetups')
  const meetupsCollection = db.collection('meetups')

  const result = await meetupsCollection.insertOne(data) 
  
  client.close() 

  res.status(201).json(result)
}

export default handler;
