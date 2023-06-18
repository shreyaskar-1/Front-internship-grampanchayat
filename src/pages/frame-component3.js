import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paginator from "../components/paginator";
import "./frame-component3.css";

const FrameComponent3 = () => {
  const [name, handleNameChange] = useState("");
  const [number, handleNumberChange] = useState("");
  const [password, handlePasswordChange] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data here or update state based on your requirements
    // For example, you can fetch data from an API using the Fetch API or Axios
    // Once the data is fetched, you can update the state variables accordingly
    const fetchData = async () => {
      try {
        const response = await fetch("your_api_endpoint");
        const data = await response.json();
        handleNameChange(data.name);
        handleNumberChange(data.number);
        handlePasswordChange(data.password);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = () => {
    // Perform login logic here
    // ...

    // Redirect to the desired page after successful login
    navigate("/frame-6");
  };

  return (
<div className="rectangle-wrapper">
      <div className="frame-child33" />
      <div className="frame-child34" />
      <div className="frame-child35" />
      <div className="text12">Headline</div>
      <div className="supporting-text3">A descriptive body text comes here</div>
      <div className="frame-div">
        <div className="button-63">
          <div className="button-base9">
            <img className="filter-lines-icon3" alt="" src="/filterlines.svg" />
            <div className="text13">Filters</div>
          </div>
        </div>
      </div>
      <div className="button-53">
        <div className="button-base10">
          <img
            className="filter-lines-icon3"
            alt=""
            src="/downloadcloud021.svg"
          />
          <div className="text13">Export</div>
        </div>
      </div>
      <div className="button-013">
        <div className="button-base11">
          <img className="filter-lines-icon3" alt="" src="/plus1.svg" />
          <div className="text13">Add</div>
        </div>
      </div>
      <div className="frame-child36" />
      <div className="search3">
        <div className="contents3">
          <img className="icon3" alt="" src="/icon.svg" />
          <div className="field-text3">Search</div>
        </div>
        <div className="line3" />
      </div>
      <div className="id4">{`परिवार समग्र Id `}</div>
      <div className="sno3">S.No</div>
      <div className="div153">आधार कार्ड</div>
      <div className="div154">मोबाइल नं</div>
      <div className="div155">{`ग्राम `}</div>
      <div className="div156">{`वार्ड न `}</div>
      <div className="div157">{`भवन कर `}</div>
      <div className="div158">प्रकाश कर</div>
      <div className="div159">{`स्वच्छ कर `}</div>
      <div className="div160">विकास शुल्क</div>
      <div className="div161">राशि / जमा / बाकि</div>
      <div className="action3">Action</div>
      <div className="frame-child37" />
      <div className="div162">1</div>
      <div className="xxxxx234524">456xxxxx2345</div>
      <div className="xxxxx234525">456xxxxx2345</div>
      <div className="div163">5678963478</div>
      <div className="div164">42</div>
      <div className="div165">{`चिरीला रहो खेड़ी `}</div>
      <div className="div166">{`चिरीला रहो खेड़ी `}</div>
      <div className="div167">{`चिरीला रहो खेड़ी `}</div>
      <div className="div168">{`चिरीला रहो खेड़ी `}</div>
      <div className="div169">{`3000.00 `}</div>
      <div className="div170">{`3000.00 `}</div>
      <img className="vector-icon12" alt="" src="/vector.svg" />
      <div className="frame-child38" />
      <div className="div171">2</div>
      <div className="xxxxx234526">456xxxxx2345</div>
      <div className="xxxxx234527">456xxxxx2345</div>
      <div className="div172">5678963478</div>
      <div className="div173">42</div>
      <div className="div174">{`चिरीला रहो खेड़ी `}</div>
      <div className="div175">{`चिरीला रहो खेड़ी `}</div>
      <div className="div176">{`चिरीला रहो खेड़ी `}</div>
      <div className="div177">{`चिरीला रहो खेड़ी `}</div>
      <div className="div178">{`3000.00 `}</div>
      <div className="div179">{`3000.00 `}</div>
      <img className="vector-icon13" alt="" src="/vector.svg" />
      <div className="frame-child39" />
      <div className="div180">3</div>
      <div className="xxxxx234528">456xxxxx2345</div>
      <div className="xxxxx234529">456xxxxx2345</div>
      <div className="div181">5678963478</div>
      <div className="div182">42</div>
      <div className="div183">{`चिरीला रहो खेड़ी `}</div>
      <div className="div184">{`चिरीला रहो खेड़ी `}</div>
      <div className="div185">{`चिरीला रहो खेड़ी `}</div>
      <div className="div186">{`चिरीला रहो खेड़ी `}</div>
      <div className="div187">{`3000.00 `}</div>
      <div className="div188">{`3000.00 `}</div>
      <img className="vector-icon14" alt="" src="/vector.svg" />
      <div className="frame-child40" />
      <div className="div189">4</div>
      <div className="xxxxx234530">456xxxxx2345</div>
      <div className="xxxxx234531">456xxxxx2345</div>
      <div className="div190">5678963478</div>
      <div className="div191">42</div>
      <div className="div192">{`चिरीला रहो खेड़ी `}</div>
      <div className="div193">{`चिरीला रहो खेड़ी `}</div>
      <div className="div194">{`चिरीला रहो खेड़ी `}</div>
      <div className="div195">{`चिरीला रहो खेड़ी `}</div>
      <div className="div196">{`3000.00 `}</div>
      <div className="div197">{`3000.00 `}</div>
      <img className="vector-icon15" alt="" src="/vector.svg" />
      <div className="frame-child41" />
      <div className="div198">5</div>
      <div className="xxxxx234532">456xxxxx2345</div>
      <div className="xxxxx234533">456xxxxx2345</div>
      <div className="div199">5678963478</div>
      <div className="div200">42</div>
      <div className="div201">{`चिरीला रहो खेड़ी `}</div>
      <div className="div202">{`चिरीला रहो खेड़ी `}</div>
      <div className="div203">{`चिरीला रहो खेड़ी `}</div>
      <div className="div204">{`चिरीला रहो खेड़ी `}</div>
      <div className="div205">{`3000.00 `}</div>
      <div className="div206">{`3000.00 `}</div>
      <img className="vector-icon16" alt="" src="/vector.svg" />
      <div className="frame-child42" />
      <div className="div207">6</div>
      <div className="xxxxx234534">456xxxxx2345</div>
      <div className="xxxxx234535">456xxxxx2345</div>
      <div className="div208">5678963478</div>
      <div className="div209">42</div>
      <div className="div210">{`चिरीला रहो खेड़ी `}</div>
      <div className="div211">{`चिरीला रहो खेड़ी `}</div>
      <div className="div212">{`चिरीला रहो खेड़ी `}</div>
      <div className="div213">{`चिरीला रहो खेड़ी `}</div>
      <div className="div214">{`3000.00 `}</div>
      <div className="div215">{`3000.00 `}</div>
      {/* <img className="vector-icon17" alt="" src="/vector.svg" />
      <img className="frame-child43" alt="" src="/rectangle-22.svg" /> */}
      {/* <img className="frame-child44" alt="" src="/rectangle-1653.svg" />
      <div className="edit-container">
        <div className="edit2">Edit</div>
        <img
          className="feather-icon-edit-22"
          alt=""
          src="/feathericon--edit2.svg"
        />
      </div>
      <div className="update-container">
        <div className="update2">Update</div>
        <img
          className="feather-icon-refresh-ccw2"
          alt=""
          src="/feathericon--refreshccw1.svg"
        />
      </div> */}
      {/* <div className="download-frame">
        <div className="download2">Download</div>
      </div> */}
      <Paginator />
      <img className="frame-child45" alt="" src="/rectangle-1650@2x.png" />
      {/* <img className="help-icon" alt="" src="/help.svg" /> */}
      <img className="notification-icon3" alt="" src="/notification-icon.svg" />
      <div className="title6">
        <b className="title7">Gram Panchayat</b>
      </div>
      {/* <img
        className="download-svgrepo-com-1-icon2"
        alt=""
        src="/downloadsvgrepocom-1.svg" */}
      />
      <div className="frame-child46" />
      <div className="hindi3">Hindi</div>
      <img
        className="language-svgrepo-com-1-icon3"
        alt=""
        src="/languagesvgrepocom-1.svg"
      />
//
    <img
        className="material-symbolskeyboard-arro-icon7"
        alt=""
        src="/materialsymbolskeyboardarrowdownrounded1.svg"
      />
      {/* <img
        className="personal-center-log-out-svgrep-icon2"
        alt=""
        src="/personalcenterlogoutsvgrepocom-2.svg"
      />
      <div className="log-out2">Log out</div>  */}
      <div className="frame-child47" />
      <div className="frame-child48" />
      <div className="admin">Admin</div>

      <div className="name2">Name</div>
      <div className="input12">
        <input
          type="text"
          className="name3"
          value={name}
          placeholder="Name"
          onChange={(e) => handleNameChange(e.target.value)}
        />
      </div>
      <div className="number">Number</div>
      <div className="input13">
        <input
          type="number"
          className="name3"
          value={number}
          placeholder="9786........"
          onChange={(e) => handleNumberChange(e.target.value)}
        />
      </div>
      <div className="password">Password</div>
      <div className="input14">
        <input
          type="password"
          className="name3"
          value={password}
          placeholder="*********"
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
      </div>
      <div className="button1"onClick={handleLogin}>
        <div className="send">Send</div>
      </div>
    </div>
  );
};

export default FrameComponent3;
