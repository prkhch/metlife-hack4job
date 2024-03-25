import React from "react";
import { Routes, Route } from "react-router-dom";

import StartPage from "../pages/StartPage";
import SurveyPage from "../pages/SurveyPage";
import SurveyPage2 from "../pages/SurveyPage2";
import SurveyPage3 from "../pages/SurveyPage3";
import SurveyPage4 from "../pages/SurveyPage4";
import SurveyPage5 from "../pages/SurveyPage5";
import SurveyPage6 from "../pages/SurveyPage6";
import SurveyPage7 from "../pages/SurveyPage7";
import SurveyPage8 from "../pages/SurveyPage8";
import SurveyPage9 from "../pages/SurveyPage9";
import SurveyPage10 from "../pages/SurveyPage10";
import ResultPage from "../pages/ResultPage";
import RegisterPage from "../pages/RegisterPage";
import LoadingPage from "../pages/LoadingPage";
import KategoriePage from "../pages/KategoriePage";

const AppRoute = () => {
  return (
    <Routes>
      <Route index element={<StartPage />} />
      <Route path="/survey" element={<SurveyPage />} />
      <Route path="/survey2" element={<SurveyPage2 />} />
      <Route path="/survey3" element={<SurveyPage3 />} />
      <Route path="/survey4" element={<SurveyPage4 />} />
      <Route path="/survey5" element={<SurveyPage5 />} />
      <Route path="/survey6" element={<SurveyPage6 />} />
      <Route path="/survey7" element={<SurveyPage7 />} />
      <Route path="/survey8" element={<SurveyPage8 />} />
      <Route path="/survey9" element={<SurveyPage9 />} />
      <Route path="/survey10" element={<SurveyPage10 />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/kategorie" element={<KategoriePage />} />
    </Routes>
  );
};

export default AppRoute;
