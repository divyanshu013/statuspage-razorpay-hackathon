import React, { useEffect, useState } from "react";
import containerStyles from "../styles/components/incidents.module.scss";
import dayjs from "dayjs";

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
  return (
    <div className={containerStyles.incidents_container}>
      <div className={containerStyles.incidents_content}>
        <h1>Past incidents (last 7 days)</h1>
        {data &&
          data.map((incident) => (
            <div key={incident.id}>
              <h2 style={{ color: "salmon" }}>{incident.title}</h2>
              <div className={containerStyles.incidents_time_container}>
                <div>
                  {dayjs(incident.startDatetime).format("HH:mm DD/MM/YYYY")}
                </div>
                <div style={{ padding: "0 16px" }}> - </div>
                <div>
                  {incident.endDatetime
                    ? dayjs(incident.endDatetime).format("HH:mm DD/MM/YYYY")
                    : "Ongoing"}
                </div>
              </div>
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
