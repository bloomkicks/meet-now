import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../components/meetup details/MeetupDetails";
import mockMeetups from "../data/meetups";

const MeetupDetailsPage = (props) => {
  return <MeetupDetails meetup={props.meetup} />;
};

export default MeetupDetailsPage;

export const getStaticPaths = async () => {
  const clusterURI =
    "mongodb+srv://boba:bobapassword@nextmeetups.kfxp6.mongodb.net/NextMeetups?retryWrites=true&w=majority";

  let meetups = mockMeetups;
  try {
    const client = await MongoClient.connect(clusterURI);
    const db = client.db("NextMeetups");
    const meetupsCollection = db.collection("meetups");
    meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();
  } catch (err) {
    console.error("Connection to MongoDB failed", err);
  }

  return {
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id ? meetup._id.toString() : meetup.id,
        },
      };
    }),
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  let meetup = mockMeetups.find(
    (item) => item.id === context.params.meetupId
  );
  try {
    const clusterURI =
      "mongodb+srv://boba:bobapassword@nextmeetups.kfxp6.mongodb.net/NextMeetups?retryWrites=true&w=majority";

    const client = await MongoClient.connect(clusterURI);
    const db = client.db("NextMeetups");
    const meetupsCollection = db.collection("meetups");
    meetup = await meetupsCollection.findOne({
      _id: ObjectId(context.params.meetupId),
    });
    meetup.id = meetup._id.toString();
    delete meetup._id;
    client.close();
  } catch (err) {
    console.error("Connection to MongoDB failed", err);
  }

  return {
    props: {
      meetup,
    },
  };
};
