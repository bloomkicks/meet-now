import { MongoClient } from "mongodb";
import Meetups from "../src/components/meetups/Meetups";

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

  const client = await MongoClient.connect(clusterURI);
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  for (let meetup of meetups) {
    meetup.id = meetup._id.toString()
    delete meetup._id
  }

  client.close()

  return {
    props: {
      meetups,
    },
    revalidate: 10,
  };
};

export default MeetupsPage;
