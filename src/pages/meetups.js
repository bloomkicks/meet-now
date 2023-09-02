import { MongoClient } from "mongodb";
import Meetups from "../components/meetups/Meetups";
import mockMeetups from "../data/meetups";

const MeetupsPage = (props) => {
  return (
    <div>
      <Meetups meetups={props.meetups} />
    </div>
  );
};

export const getStaticProps = async (params) => {
  const clusterURI =
    "mongodb+srv://boba:bobapassword@nextmeetups.kfxp6.mongodb.net/NextMeetups?retryWrites=true&w=majority";

  let meetups = mockMeetups;
  try {
    const client = await MongoClient.connect(clusterURI);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    meetups = await meetupsCollection.find().toArray();
    for (let meetup of meetups) {
      meetup.id = meetup._id.toString();
      delete meetup._id;
    }
    client.close();
  } catch (err) {
    console.error("Connection to MongoDB failed", err);
  }

  return {
    props: {
      meetups,
    },
    revalidate: 10,
  };
};

export default MeetupsPage;
