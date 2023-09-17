import React from "react";
import { SCStatistics } from "./ProfileElems.style";
import { statisticsData } from "./ProfileElems.data";
import { CountElem } from "./CountElem";

interface IStatisticsProps {}

export const Statistics = ({}: IStatisticsProps) => {
  return (
    <SCStatistics>
      <h5>Статистика за месяц</h5>
      <div className="countsWrapper">
        {statisticsData.map((data) => (
          <CountElem count={data.count} countDescription={data.description} />
        ))}
      </div>
    </SCStatistics>
  );
};
