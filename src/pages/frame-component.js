import Paginator from "../components/paginator";
import "./frame-component.css";
const FrameComponent = () => {
  return (
    <div className="rectangle-parent">
      <div className="frame-child" />
      <div className="frame-item" />
      <div className="frame-inner" />
      <div className="text">Headline</div>
      <div className="supporting-text">A descriptive body text comes here</div>
      <div className="button-6-wrapper">
        <div className="button-6">
          <div className="button-base">
            <img className="filter-lines-icon" alt="" src="/filterlines.svg" />
            <div className="text1">Filters</div>
          </div>
        </div>
      </div>
      <div className="button-5">
        <div className="button-base1">
          <img
            className="filter-lines-icon"
            alt=""
            src="/downloadcloud02.svg"
          />
          <div className="text1">Export</div>
        </div>
      </div>
      <div className="button-01">
        <div className="button-base2">
          <img className="filter-lines-icon" alt="" src="/plus.svg" />
          <div className="text1">Add</div>
        </div>
      </div>
      <div className="rectangle-div" />
      <div className="search">
        <div className="contents">
          <img className="icon" alt="" src="/icon.svg" />
          <div className="field-text">Search</div>
        </div>
        <div className="line" />
      </div>
      <div className="id">{`परिवार समग्र Id `}</div>
      <div className="sno">S.No</div>
      <div className="div">आधार कार्ड</div>
      <div className="div1">मोबाइल नं</div>
      <div className="div2">{`ग्राम `}</div>
      <div className="div3">{`वार्ड न `}</div>
      <div className="div4">{`भवन कर `}</div>
      <div className="div5">प्रकाश कर</div>
      <div className="div6">{`स्वच्छ कर `}</div>
      <div className="div7">विकास शुल्क</div>
      <div className="div8">राशि / जमा / बाकि</div>
      <div className="action">Action</div>
      <Paginator />
      <img className="rectangle-icon" alt="" src="/rectangle-1650@2x.png" />
      <img className="notification-icon" alt="" src="/notification-icon.svg" />
      <div className="title">
        <b className="title1">User</b>
      </div>
      <div className="frame-child1" />
      <div className="hindi">Hindi</div>
      <img
        className="language-svgrepo-com-1-icon"
        alt=""
        src="/languagesvgrepocom-1.svg"
      />
      <img
        className="material-symbolskeyboard-arro-icon"
        alt=""
        src="/materialsymbolskeyboardarrowdownrounded.svg"
      />
      <img
        className="material-symbolskeyboard-arro-icon1"
        alt=""
        src="/materialsymbolskeyboardarrowdownrounded1.svg"
      />
    </div>
  );
};

export default FrameComponent;
