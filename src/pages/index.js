import React, { useEffect } from "react";
import "../styles/pages/index.scss";
import Container from "../components/container-2";
import TitleBox from "../components/titlebox";
import Footer from "../components/footer-2";
import Incidents from "../components/incidents";
import StatusBoxContainer from "../components/statusboxContainer";
import { Location } from "@reach/router";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Index({ data }) {
  return (
    <Location>
      {({ location, navigate }) => (
        <Container>
          <Helmet>
            <meta name="description" content="Razorpay status page" />
            <meta name="keywords" content="razorpay, status" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="black"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="https://razorpay.com/favicon.png?v=2"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="https://razorpay.com/favicon.png?v=2"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="https://razorpay.com/favicon.png?v=2"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#e9384f"
            />
            <link
              rel="shortcut icon"
              href="https://razorpay.com/favicon.png?v=2"
            />
            <meta
              name="apple-mobile-web-app-title"
              content="Status WisniowaSU"
            />
            <meta name="application-name" content="Status Wiśniowa SU" />
            <meta name="msapplication-TileColor" content="#e9384f" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
            <title>Razorpay Status</title>
            <meta property="og:site_name" content="Status Wiśniowa SU" />
            <meta property="og:title" content="Razorpay Status" />
            <meta property="og:description" content="Razorpay status page" />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://razorpay.com/assets/og.png"
            />
            <link rel="icon" href="https://razorpay.com/favicon.png?v=2" />
          </Helmet>
          <TitleBox />

          <StatusBoxContainer />
          <Incidents />
          <Footer />
        </Container>
      )}
    </Location>
  );
}
Index.displayName = "Index";
Index.propTypes = {
  data: PropTypes.object,
};
