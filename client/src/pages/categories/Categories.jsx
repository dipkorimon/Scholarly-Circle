import React, { useEffect, useState } from "react";
import Category from "../../components/category/Category";
import "./categories.scss";
import axios from "axios";
import CategoryList from "../../components/categoryList/CategoryList";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Categories = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports")
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueSessions, setUniqueSessions] = useState([]);
  const [uniqueDegrees, setUniqueDegrees] = useState([]);
  const [uniqueReportTypes, setUniqueReportTypes] = useState([]);

  useEffect(() => {
    const uniqueCategoriesSet = new Set(report.map((item) => item.category));
    const uniqueCategoriesArray = Array.from(uniqueCategoriesSet);
    setUniqueCategories(uniqueCategoriesArray);
  }, [report]);

  useEffect(() => {
    const uniqueSessionsSet = new Set(report.map((item) => item.session));
    const uniqueSessionsArray = Array.from(uniqueSessionsSet);
    setUniqueSessions(uniqueSessionsArray);
  }, [report]);

  useEffect(() => {
    const uniqueDegreesSet = new Set(report.map((item) => item.degree));
    const uniqueDegreesArray = Array.from(uniqueDegreesSet);
    setUniqueDegrees(uniqueDegreesArray);
  }, [report]);

  useEffect(() => {
    const uniqueReportTypesSet = new Set(
      report.map((item) => item.report_type)
    );
    const uniqueReportTypesArray = Array.from(uniqueReportTypesSet);
    setUniqueReportTypes(uniqueReportTypesArray);
  }, [report]);

  return (
    <div className="categories">
      <div className="all-items">
        <div className="filter">
          <h3 className="cat">
            <CategoryIcon />
            Categories
          </h3>
          {uniqueCategories.map((category) => (
            <div className="category-list">
              <a href={`/categories/${category}`}>
                <CategoryList category={category} />
              </a>
            </div>
          ))}
          <h3 className="cat" style={{ marginTop: 20 }}>
            <ClassIcon />
            Sessions
          </h3>
          {uniqueSessions.map((session) => (
            <div className="category-list">
              <a href={`/sessions/${session}`}>
                <CategoryList category={session} />
              </a>
            </div>
          ))}
          <h3 className="cat" style={{ marginTop: 20 }}>
            <WorkspacePremiumIcon />
            Degrees
          </h3>
          {uniqueDegrees.map((degree) => (
            <div className="category-list">
              <a href={`/degrees/${degree}`}>
                <CategoryList category={degree} />
              </a>
            </div>
          ))}
          <h3 className="cat" style={{ marginTop: 20 }}>
            <TypeSpecimenIcon />
            Report Types
          </h3>
          {uniqueReportTypes.map((report_type) => (
            <div className="category-list">
              <a href={`/reportTypes/${report_type}`}>
                <CategoryList
                  category={
                    report_type.charAt(0).toUpperCase() + report_type.slice(1)
                  }
                />
              </a>
            </div>
          ))}
        </div>
        <div className="items">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Categories;
