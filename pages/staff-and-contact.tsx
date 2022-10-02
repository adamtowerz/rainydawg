import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/StaffAndContact.module.scss";

type StaffAndContactData = {
  name: string;
  title: string;
  photo: string;
  info1: string;
  info2: string;
  email: string;
};

const staff: StaffAndContactData[] = [
  {
    name: "Bella Lufshanowski",
    title: "General Manager",
    photo: "/pengu.png",
    info1:
      "Our fearless leader. Can probably handle any issue you throw at them!",
    info2: "Contact for general inquiries.",
    email: "asuwrdgm@uw.edu",
  },
  {
    name: "Naomi Zamarripa",
    title: "Assistant Manager",
    photo: "/pengu.png",
    info1:
      "Our fearless leader. Can probably handle any issue you throw at her.",
    info2: "Contact for general inquiries.",
    email: "asuwrdam@uw.edu",
  },
  {
    name: "Elliott Hansen",
    title: "Music Director",
    photo: "/elliott.jpg",
    info1:
      "The preTencious music person with the opinions. Books shows and curates our rotation!",
    info2:
      "Contact for bookings, music submissions, and music library inquiries.",
    email: "asuwrdmd@uw.edu",
  },
  {
    name: "Emily Vaughan",
    title: "Promotions Coordinator",
    photo: "/pengu.png",
    info1: "information",
    info2: "Contact for social media, marketing, and promotion inquiries.",
    email: "asuwrdpc@uw.edu",
  },
  {
    name: "Cooper Houston",
    title: "Technology Manager",
    photo: "/pengu.png",
    info1: "*clipping and feedback*",
    info2: "Contact for studio, website, or general technology inquiries.",
    email: "asuwrdtm@uw.edu",
  },
];

function StaffAndContactCard({
  name,
  title,
  photo,
  info1,
  info2,
  email,
}: StaffAndContactData) {
  return (
    <div className={styles.card}>
      <div className={styles.cardPhoto}>
        <Image src={photo} layout="fill" alt={name} objectFit="cover"></Image>
      </div>
      <h2>{name}</h2>
      <p>
        <b>{title}</b>
      </p>
      <p>{info1}</p>
      <p>{info2}</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
}

const StaffAndContact: NextPage = () => {
  return (
    <Layout title="Staff and Contact">
      <div className={styles.cardContainer}>
        {staff.map((person) => (
          <StaffAndContactCard key={person.email} {...person} />
        ))}
      </div>
    </Layout>
  );
};

export default StaffAndContact;
