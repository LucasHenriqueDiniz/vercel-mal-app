import { MalLastUpdatesResponse } from "@/app/types/malLastUpdatesResponse";
import { MalStatisticsResponse } from "@/app/types/malStatisticsResponse";
import MalProfileLastActivity from "@/components/classic-mal/MalProfileLastActivity";
import MalProfileStatistics from "@/components/classic-mal/MalProfileStatistics";
import { exampleLastUpdateResponse } from "../test/exampleLastUpdatesResponse";
import { exampleStatisticsResponse } from "../test/exampleStatisticsResponse";
import SvgContainer from "./SvgContainer";
import myAnimeListRequest from "../requests/malApi";

// const lastUpdateData: MalLastUpdatesResponse = exampleLastUpdateResponse; // example data for testing
// const statisticsData: MalStatisticsResponse = exampleStatisticsResponse; // example data for testing

function renderStats(stats: string, statisticsData: MalStatisticsResponse) {
  switch (stats) {
    case "anime":
      return (
        <MalProfileStatistics
          data={statisticsData.anime}
          userName="Amayacrab"
          stat="anime"
        />
      );

    case "manga":
      return (
        <MalProfileStatistics
          data={statisticsData.manga}
          userName="Amayacrab"
          stat="manga"
          y={250}
        />
      );
  }
}

function renderLastActivity(
  stats: string,
  lastActivityData: MalLastUpdatesResponse
) {
  switch (stats) {
    case "anime":
      return (
        <MalProfileLastActivity
          data={lastActivityData.anime}
          userName="Amayacrab"
          stat="anime"
          x={480}
        />
      );

    case "manga":
      return (
        <MalProfileLastActivity
          data={lastActivityData.manga}
          userName="Amayacrab"
          stat="manga"
          x={480}
          y={250}
        />
      );
  }
}

interface MalProfileStatsProps {
  stats: string[];
  lastActivityData: MalLastUpdatesResponse;
  statisticsData: MalStatisticsResponse;
}

const MalProfileClassic = ({
  stats,
  lastActivityData,
  statisticsData,
}: MalProfileStatsProps) => {
  return (
    <SvgContainer>
      {stats.map((stat) => (
        <g key={stat}>
          {renderStats(stat, statisticsData)}
          {renderLastActivity(stat, lastActivityData)}
        </g>
      ))}
    </SvgContainer>
  );
};

export default MalProfileClassic;
