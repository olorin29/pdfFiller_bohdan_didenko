import PrimaryButton from "./PrimaryButton";
// import SimpleButton from "./SimpleButton";
import DocumentIcon from "../icon-document.svg"

const DocumentList = () => {
  return (
    <ul className="document__list">
      <li className="document__item">
        <div className="document__item-wrapper">
          <div className="document__item-content-box">
            <img src={DocumentIcon} alt="document icon"/>
            <div className="document__item-content-wrapper">
              <h2>Rundofase</h2>
              <span>Last Edited:<time>08/08/2020</time></span>
            </div>
          </div>
          <div className="document__item-button-box">
            <PrimaryButton btnDisabled={true}/>
          </div>
        </div>
      </li>
      <li className="document__item">
        <div className="document__item-wrapper">

          <div className="document__item-content-box">
            <img src={DocumentIcon} alt="document icon"/>
            <div className="document__item-content-wrapper">
              <h2>Genco Pura Olive Oil Company</h2>
              <span>Last Edited:<time>08/08/2020</time></span>
            </div>
          </div>
          <div className="document__item-button-box">
            <PrimaryButton />
          </div>
        </div>
      </li>
      <li className="document__item">
        <div className="document__item-wrapper">
          <div className="document__item-content-box">
            <img src={DocumentIcon} alt="document icon"/>
            <div className="document__item-content-wrapper">
              <h2>Bubba Gump</h2>
              <span>Last Edited:<time>08/08/2020</time></span>
            </div>
          </div>
          <div className="document__item-button-box">
            <PrimaryButton className="primary-button" />
          </div>
        </div>
      </li>
    </ul>
  );
}

export default DocumentList;
