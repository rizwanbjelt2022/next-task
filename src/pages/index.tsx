import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
// import "./style.css"
// import styles from './style.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userDetails, setUserDetails] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api");
      console.log(data.data);
      setUserDetails(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="main-div row">
      {userDetails?.map((data, index) => {
        return (
          <div className="card" key={index}>
            <p>username :{data?.username}</p>
            <div className="user-data">
            <Image
              src="data:image/jpeg;base64,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"
              width={50}
              height={50}
              alt="Picture of the author"
              className="avatar"
              // objectFit="cover"
            />
            <h4>name:{data?.name}</h4>
            <p>email:{data?.website}</p>
            <div className="non-active-div">
              <h6>Non-active</h6>
            </div>
            </div>
            
            <div className="phone-number-section">
            <hr></hr>
            <div className="phone-details">
            <Image
              src="/images/social.png"
              width={20}
              height={20}
              alt="Picture of the author"
              // objectFit="cover"
            />
              <p>phone:{data?.phone}</p>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
