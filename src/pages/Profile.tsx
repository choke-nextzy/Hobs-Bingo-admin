import { useLocation } from "react-router-dom";
import { IUserProfile } from "../interfaces/User";
import { useState, useEffect } from "react";
import "../styles/Profile.scss";

function Profile() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const scannedData = queryParams.get("data");
  const [userData, setUserData] = useState<IUserProfile | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  useEffect(() => {
    if (scannedData) {
      try {
        const parsedData: IUserProfile = JSON.parse(scannedData);
        setUserData(parsedData);
      } catch (error) {
        console.error(`Error parsing JSON: ${error}`);
      }
    }
  }, [scannedData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      {userData ? (
        <div className="profile">
          <div className="image-container">
            <img
              src={userData.pictureUrl}
              alt="User's Profile Picture"
              className="centered-image"
            />
          </div>
          <p>UserID: {userData.userId}</p>
          <p>Display Name: {userData.displayName}</p>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter number"
          />
          <button onClick={handleSubmit}>Submit</button>
          {submittedValue && <p> Value: {submittedValue}</p>}
          {/* <p>ID Token: {userData.idToken}</p> */}
        </div>
      ) : (
        <p>No user profile data available.</p>
      )}
    </div>
  );
}

export default Profile;
