import React, { useEffect, useState } from "react";
import containerStyles from "../styles/components/incidents.module.scss";

const query = `
{
  incidents(last: 15, orderBy: startDatetime_DESC) {
    id
    title
    description {
      html
    }
    startDatetime
    endDatetime
  }
}
`;

const Incidents = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://api-ap-northeast-1.graphcms.com/v2/ckk6ly2x4mbjl01z1306oaqpg/master",
      {
        method: "POST",
        body: JSON.stringify({ query }),
      }
    )
      .then((res) => res.json())
      .then((json) => setData(json.data.incidents));
  }, []);
  console.log({ data });
  return (
    <div className={containerStyles.incidents_container}>
      <div className={containerStyles.incidents_content}>
        <h1>Past incidents</h1>
        {data &&
          data.map((incident) => (
            <div key={incident.id}>
              <h2>{incident.title}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: incident.description.html }}
              />
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Incidents;
