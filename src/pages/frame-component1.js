import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paginator from "../components/paginator";
import "./frame-component1.css";
const FrameComponent1 = () => {
    const [परिवारसमग्रId, handleIdChange] = useState("");
    const [mobilenumber, handleNumberChange] = useState("");
    const [wardnumber, handleWardNumberChange] = useState("");
    const [prakashkar, handleTaxChange] = useState("");
    const [developmentcost, handleCostChange] = useState("");
    const [aadhar, handleAadharChange] = useState("");
    const [village, handleVillageChange] = useState("");
    const [housetax, handlehouseTaxChange] = useState("");
    const [CleanninessTax, handleCleanninessTaxChange] = useState("");
    const [AmtSbmtDue, handleAmtSbmtDueChange] = useState("");
    const [HouseNo, handleHouseNoChange] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
      // Fetch data here or update state based on your requirements
      // For example, you can fetch data from an API using the Fetch API or Axios
      // Once the data is fetched, you can update the state variables accordingly
      const fetchData = async () => {
        try {
          const response = await fetch("your_api_endpoint");
          const data = await response.json();
          handleIdChange(data.परिवारसमग्रId);
          handleNumberChange(data.mobilenumber);
          handleWardNumberChange(data.wardnumber);
          handleTaxChange(data.prakashkar);
          handleCostChange(data.developmentcost);
          handleAadharChange(data.aadhar);
          handleVillageChange(data.village);
          handlehouseTaxChange(data.housetax);
          handleCleanninessTaxChange(data.CleanninessTax);
          handleAmtSbmtDueChange(data.AmtSbmtDue);
          handleHouseNoChange(data.HouseNo);
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
    <div className="rectangle-root">
      <div className="frame-child2" />
      <div className="frame-child3" />
      <div className="frame-child4" />
      <div className="text4">Headline</div>
      <div className="supporting-text1">A descriptive body text comes here</div>
      <div className="button-6-container">
        <div className="button-61">
          <div className="button-base3">
            <img className="filter-lines-icon1" alt="" src="/filterlines.svg" />
            <div className="text5">Filters</div>
          </div>
        </div>
      </div>
      <div className="button-51">
        <div className="button-base4">
          <img
            className="filter-lines-icon1"
            alt=""
            src="/downloadcloud02.svg"
          />
          <div className="text5">Export</div>
        </div>
      </div>
      <div className="button-011">
        <div className="button-base5">
          <img className="filter-lines-icon1" alt="" src="/plus.svg" />
          <div className="text5">Add</div>
        </div>
      </div>
      <div className="frame-child5" />
      <div className="search1">
        <div className="contents1">
          <img className="icon1" alt="" src="/icon.svg" />
          <div className="field-text1">Search</div>
        </div>
        <div className="line1" />
      </div>
      <div className="id1">{`परिवार समग्र Id `}</div>
      <div className="sno1">S.No</div>
      <div className="div9">आधार कार्ड</div>
      <div className="div10">मोबाइल नं</div>
      <div className="div11">{`ग्राम `}</div>
      <div className="div12">{`वार्ड न `}</div>
      <div className="div13">{`भवन कर `}</div>
      <div className="div14">प्रकाश कर</div>
      <div className="div15">{`स्वच्छ कर `}</div>
      <div className="div16">विकास शुल्क</div>
      <div className="div17">राशि / जमा / बाकि</div>
      <div className="action1">Action</div>
      <div className="frame-child6" />
      <div className="div18">1</div>
      <div className="xxxxx2345">456xxxxx2345</div>
      <div className="xxxxx23451">456xxxxx2345</div>
      <div className="div19">5678963478</div>
      <div className="div20">42</div>
      <div className="div21">{`चिरीला रहो खेड़ी `}</div>
      <div className="div22">{`चिरीला रहो खेड़ी `}</div>
      <div className="div23">{`चिरीला रहो खेड़ी `}</div>
      <div className="div24">{`चिरीला रहो खेड़ी `}</div>
      <div className="div25">{`3000.00 `}</div>
      <div className="div26">{`3000.00 `}</div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="frame-child7" />
      <div className="div27">2</div>
      <div className="xxxxx23452">456xxxxx2345</div>
      <div className="xxxxx23453">456xxxxx2345</div>
      <div className="div28">5678963478</div>
      <div className="div29">42</div>
      <div className="div30">{`चिरीला रहो खेड़ी `}</div>
      <div className="div31">{`चिरीला रहो खेड़ी `}</div>
      <div className="div32">{`चिरीला रहो खेड़ी `}</div>
      <div className="div33">{`चिरीला रहो खेड़ी `}</div>
      <div className="div34">{`3000.00 `}</div>
      <div className="div35">{`3000.00 `}</div>
      <img className="vector-icon1" alt="" src="/vector.svg" />
      <div className="frame-child8" />
      <div className="div36">3</div>
      <div className="xxxxx23454">456xxxxx2345</div>
      <div className="xxxxx23455">456xxxxx2345</div>
      <div className="div37">5678963478</div>
      <div className="div38">42</div>
      <div className="div39">{`चिरीला रहो खेड़ी `}</div>
      <div className="div40">{`चिरीला रहो खेड़ी `}</div>
      <div className="div41">{`चिरीला रहो खेड़ी `}</div>
      <div className="div42">{`चिरीला रहो खेड़ी `}</div>
      <div className="div43">{`3000.00 `}</div>
      <div className="div44">{`3000.00 `}</div>
      <img className="vector-icon2" alt="" src="/vector.svg" />
      <div className="frame-child9" />
      <div className="div45">4</div>
      <div className="xxxxx23456">456xxxxx2345</div>
      <div className="xxxxx23457">456xxxxx2345</div>
      <div className="div46">5678963478</div>
      <div className="div47">42</div>
      <div className="div48">{`चिरीला रहो खेड़ी `}</div>
      <div className="div49">{`चिरीला रहो खेड़ी `}</div>
      <div className="div50">{`चिरीला रहो खेड़ी `}</div>
      <div className="div51">{`चिरीला रहो खेड़ी `}</div>
      <div className="div52">{`3000.00 `}</div>
      <div className="div53">{`3000.00 `}</div>
      <img className="vector-icon3" alt="" src="/vector.svg" />
      <div className="frame-child10" />
      <div className="div54">5</div>
      <div className="xxxxx23458">456xxxxx2345</div>
      <div className="xxxxx23459">456xxxxx2345</div>
      <div className="div55">5678963478</div>
      <div className="div56">42</div>
      <div className="div57">{`चिरीला रहो खेड़ी `}</div>
      <div className="div58">{`चिरीला रहो खेड़ी `}</div>
      <div className="div59">{`चिरीला रहो खेड़ी `}</div>
      <div className="div60">{`चिरीला रहो खेड़ी `}</div>
      <div className="div61">{`3000.00 `}</div>
      <div className="div62">{`3000.00 `}</div>
      <img className="vector-icon4" alt="" src="/vector.svg" />
      <div className="frame-child11" />
      <div className="div63">6</div>
      <div className="xxxxx234510">456xxxxx2345</div>
      <div className="xxxxx234511">456xxxxx2345</div>
      <div className="div64">5678963478</div>
      <div className="div65">42</div>
      <div className="div66">{`चिरीला रहो खेड़ी `}</div>
      <div className="div67">{`चिरीला रहो खेड़ी `}</div>
      <div className="div68">{`चिरीला रहो खेड़ी `}</div>
      <div className="div69">{`चिरीला रहो खेड़ी `}</div>
      <div className="div70">{`3000.00 `}</div>
      <div className="div71">{`3000.00 `}</div>
      <img className="vector-icon5" alt="" src="/vector.svg" />
      {/* <img className="frame-child12" alt="" src="/rectangle-22.svg" />
      <div className="edit-parent">
        <div className="edit">Edit</div>
        <img
          className="feather-icon-edit-2"
          alt=""
          src="/feathericon--edit2.svg"
        />
      </div>
      <div className="update-parent">
        <div className="update">Update</div>
        <img
          className="feather-icon-refresh-ccw"
          alt=""
          src="/feathericon--refreshccw.svg"
        />
      </div>
      <div className="download-wrapper">
        <div className="download">Download</div>
      </div>
      <Paginator /> */}
      <img className="frame-child13" alt="" src="/rectangle-1650@2x.png" />
      <img className="notification-icon1" alt="" src="/notification-icon.svg" />
      <div className="title2">
        <b className="title3">Admin</b>
      </div>
      <img
        className="download-svgrepo-com-1-icon"
        alt=""
        src="/downloadsvgrepocom-1.svg"
      />
      <div className="frame-child14" />
      <div className="hindi1">Hindi</div>
      <img
        className="language-svgrepo-com-1-icon1"
        alt=""
        src="/languagesvgrepocom-1.svg"
      />
      <img
        className="material-symbolskeyboard-arro-icon2"
        alt=""
        src="/materialsymbolskeyboardarrowdownrounded.svg"
      />
      <img
        className="material-symbolskeyboard-arro-icon3"
        alt=""
        src="/materialsymbolskeyboardarrowdownrounded1.svg"
      />
      {/* <img className="frame-child15" alt="" src="/rectangle-1653.svg" />
      <img
        className="personal-center-log-out-svgrep-icon"
        alt=""
        src="/personalcenterlogoutsvgrepocom-2.svg"
      />
      {/* <div className="log-out">Log out</div>
      <div className="user-list">User list</div>
      <img
        className="add-profile-svgrepo-com-2-icon"
        alt=""
        src="/addprofilesvgrepocom-2.svg"
      /> */}
      <div className="frame-child16" />
      <div className="frame-child17" />
      <div className="add">Add</div>

      <div className="id2">{`परिवार समग्र Id `}</div>
      <div className="input">
      <input
          type="text"
          placeholder="name"
          className="name3"
          value={परिवारसमग्रId}
          onChange={(e) => handleIdChange(e.target.value)}
        />
        </div>

      <div className="div81">मोबाइल नं</div>
      <div className="input1">
      <input
          type="number"
          placeholder="7836*****"
          className="name3"
          value={mobilenumber}
          onChange={(e) => handleNumberChange(e.target.value)}
        />
        </div>

      <div className="div83">{`वार्ड न `}</div>
      <div className="input4">
      <input
          type="number"
          placeholder="*********"
          className="name3"
          value={wardnumber}
          onChange={(e) => handleWardNumberChange(e.target.value)}
        />
        </div>

      <div className="div85">प्रकाश कर</div>
      <div className="input2">
      <input
          type="number"
          placeholder="7836*****"
          className="name3"
          value={prakashkar}
          onChange={(e) => handleTaxChange(e.target.value)}
        />
      </div>

      <div className="div87">विकास शुल्क</div>
      <div className="input3">
      <input
          type="number"
          placeholder="7836*****"
          className="name3"
          value={developmentcost}
          onChange={(e) => handleCostChange(e.target.value)}
        />
      </div>

      <div className="upload-photo">Upload Photo</div>
      <div className="input10" />
      <div className="frame-child18" />
      <div className="choose-file"> <input type="file" id="photo-upload" name="photo-upload"></input></div>

      <div className="div80">आधार कार्ड</div>
      <div className="input5">
      <input
          type="number"
          placeholder="7836*****"
          className="name3"
          value={aadhar}
          onChange={(e) => handleAadharChange(e.target.value)}
        />
        </div>

      <div className="div82">{`ग्राम `}</div>
      <div className="input6">
      <input
          type="number"
          placeholder="7836*****"
          className="name3"
          value={village}
          onChange={(e) => handleVillageChange(e.target.value)}
        />
        </div>

      <div className="div84">{`भवन कर `}</div>
      <div className="input7">
      <input
          type="number"
          placeholder="7836*****"
          className="name3"
          value={housetax}
          onChange={(e) => handlehouseTaxChange(e.target.value)}
        />
        </div>

      <div className="div86">{`स्वच्छ कर `}</div>
      <div className="input8">
      <input
          type="number"
          placeholder="7836*****"
          className="name3"
          value={CleanninessTax}
          onChange={(e) => handleCleanninessTaxChange(e.target.value)}
        />
        </div>

      <div className="div89">राशि / जमा / बाकि</div>
      <div className="input9">
      <input
          type="number"
          placeholder="*********"
          className="name3"
          value={AmtSbmtDue}
          onChange={(e) => handleAmtSbmtDueChange(e.target.value)}
        /></div>


      <div className="house-no">House No.</div>
      <div className="input11">
      <input
          type="number"
          placeholder="7836*****"
          className="name3"
          value={HouseNo}
          onChange={(e) => handleHouseNoChange(e.target.value)}
        />
        </div>

        <div className="button"onClick={handleLogin}>
        <div className="submit">Send</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
