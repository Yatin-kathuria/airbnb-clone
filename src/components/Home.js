import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./home.css";
import SpecialLocation from "./SpecialLocation";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_specialLocation">
        <SpecialLocation
          image="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=720"
          location="Mussoorie"
          time="4.5-hour drive"
        />
        <SpecialLocation
          image="https://a0.muscache.com/im/pictures/bd549da5-ecdd-4642-9a4c-4943c9c8cf28.jpg?im_q=medq&amp;im_w=720"
          location="Manali"
          time="8.5-hour drive"
        />
        <SpecialLocation
          image="https://a0.muscache.com/im/pictures/08b33515-49eb-4b9b-8e60-f962fb7e700b.jpg?im_q=medq&amp;im_w=720"
          location="Almora"
          time="6.5-hour drive"
        />
      </div>
      <div className="home_specialLocation">
        <SpecialLocation
          image="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&amp;im_w=720"
          location="Kasauli"
          time="4.5-hour drive"
        />
        <SpecialLocation
          image="https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=720"
          location="Haldwani"
          time="4-hour drive"
        />
        <SpecialLocation
          image="https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=720"
          location="Dehradun"
          time="4-hour drive"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          price="₹1300/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
          price="₹1750/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
          price="₹1100/night"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="₹2000/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="₹3500/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="₹7000/night"
        />
      </div>
    </div>
  );
}

export default Home;
