import type { NextPage } from "next";
import Layout from "../components/Layout";

const StudioRecordings: NextPage = () => {
  return (
    <Layout title="Studio Recordings & Stream">
      <h2>
        <a href="https://drive.google.com/drive/folders/1yH__qFQq-LalBPwxsUGW5uHb5AwQaO0U"
         
         target="_blank"
         rel="noreferrer"
>
          Click here for the Google Drive of studio recordings*
        </a>
      </h2>
      <p>
        * Must use a UW gmail address to access recordings Volunteer DJs have
        the ability to record their shows live in the studio as they’re
        broadcasting. You can view them by clicking here or the link above. Keep
        in mind that each recording takes at most a few hours to be uploaded
        online, so check back later if you can’t find your recording. Each
        recording is automatically named by ‘(Month_Day_Year) – (Hour_Minute)’,
        and can be downloaded or played back in the Google Drive link found
        above. Check out our schedule to see when certain shows are
        broadcasting! If you have any questions about recordings, or if they are
        not updated or broken, send an email to our technology manager at
        asuwrdtm@uw.edu.
      </p>
    </Layout>
  );
};

export default StudioRecordings;
