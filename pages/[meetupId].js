import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../src/components/meetup details/MeetupDetails";

const MeetupDetailsPage = (props) => {
  return <MeetupDetails meetup={props.meetup} />;
};

export default MeetupDetailsPage;

export const getStaticPaths = async () => {
  const clusterURI =
    "mongodb+srv://boba:bobapassword@nextmeetups.kfxp6.mongodb.net/NextMeetups?retryWrites=true&w=majority";

  const client = await MongoClient.connect(clusterURI);
  const db = client.db('NextMeetups');
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString(),
        },
      };
    }),
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const clusterURI =
    "mongodb+srv://boba:bobapassword@nextmeetups.kfxp6.mongodb.net/NextMeetups?retryWrites=true&w=majority";

  const client = await MongoClient.connect(clusterURI);
  const db = client.db('NextMeetups');
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({
    _id: ObjectId(context.params.meetupId),
  });
  meetup.id = meetup._id.toString()
  delete meetup._id
  client.close();

  return {
    props: {
      meetup,
    },
  };
};
