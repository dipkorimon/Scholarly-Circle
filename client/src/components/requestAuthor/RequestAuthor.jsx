import React from "react";
import "./requestAuthor.scss";

const RequestAuthor = () => {
  return (
    <div className="request-author">
      <h1>Request for an Author account</h1>
      <p>
        An asterisk (<span>*</span>) indicates required field
      </p>
      <form action="">
        <label htmlFor="">
          Student ID<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Email<span>*</span>
        </label>
        <input type="email" required />
        <label htmlFor="">
          Password<span>*</span>
        </label>
        <input type="password" required />
        <label htmlFor="">
          Supervisor ID<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Session<span>*</span>
        </label>
        <select name="" id="">
          <option value="">Select Session</option>
          <option value="2006-2007">2006-2007</option>
          <option value="2007-2008">2007-2008</option>
          <option value="2008-2009">2008-2009</option>
          <option value="2009-2010">2009-2010</option>
          <option value="2010-2011">2010-2011</option>
          <option value="2011-2012">2011-2012</option>
          <option value="2012-2013">2012-2013</option>
          <option value="2013-2014">2013-2014</option>
          <option value="2014-2015">2014-2015</option>
          <option value="2015-2016">2015-2016</option>
          <option value="2016-2017">2016-2017</option>
          <option value="2017-2018">2017-2018</option>
          <option value="2018-2019">2018-2019</option>
          <option value="2019-2020">2019-2020</option>
          <option value="2020-2021">2020-2021</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2022-2023">2022-2023</option>
        </select>
        <label htmlFor="">
          Defense date<span>*</span>
        </label>
        <input type="date" required />
        <div className="photo-upload">
          <label htmlFor="file">
            Upload Photo<span>*</span>
          </label>
          <input type="file" id="file" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestAuthor;
