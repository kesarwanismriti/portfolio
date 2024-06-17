import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { history } from "./_helpers/history";

import ProfilePage from "./pages/ProfilePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ContactPage from "./pages/ContactPage";
import PrivacyTermsPage from "./pages/PrivacyTermsPage";
import CaseStudyCarInsurance from "./pages/CaseStudyCarInsurance";
import CaseStudyAgeVisibility from "./pages/CaseStudyAgeVisibility";
import CaseStudyGDPR from "./pages/CaseStudyGDPR";
import NotFound from "./pages/NotFound";
import CaseStudyImprovingFeatureAdoption from "./pages/CaseStudyImprovingFeatureAdoption";
import CaseStudyTaterNinjas from "./pages/CaseStudyTaterNinjas";

const routes = [
  { path: "/", name: "Profile", Component: ProfilePage },
   {
    path: "/case-studies/sarawak/",
    name: "Sarawak",
    Component: CaseStudyCarInsurance,
  },
  {
    path: "/case-studies/tater-ninjas/",
    name: "Tater Ninjas",
    Component: CaseStudyTaterNinjas,
  },
  { path: "/case-studies/", name: "Case Studies", Component: CaseStudiesPage },
  { path: "/contact/", name: "Contact", Component: ContactPage },
 
  {
    path: "/case-studies/improving-feature-adoption/",
    name: "Improving Feature Adoption",
    Component: CaseStudyImprovingFeatureAdoption,
  },

  {
    path: "/case-studies/age-visibility/",
    name: "Age Visibility",
    Component: CaseStudyAgeVisibility,
  },
  {
    path: "/case-studies/gdpr-marketing-consent/",
    name: "GDPR Marketing Consent",
    Component: CaseStudyGDPR,
  },
  // {
  //   path: "/case-studies/building-a-design-system/",
  //   name: "Building a Design System",
  //   Component: CaseStudyDesignSystem
  // },
  {
    path: "/privacy-and-terms",
    name: "Privacy + Terms",
    Component: PrivacyTermsPage,
  },
];

export default class RoutesClass extends Component {

  render() {
    const supportsHistory = "pushState" in window.history;

    return (
      <BrowserRouter history={history} forceRefresh={!supportsHistory}>
        <Routes>
          {routes.map(({ path, Component }) => {
            return (
              <Route path={path} element={<Component/>}/>
            )

   } )}
          <Route />
        </Routes>
      </BrowserRouter>
    );
  }
}
