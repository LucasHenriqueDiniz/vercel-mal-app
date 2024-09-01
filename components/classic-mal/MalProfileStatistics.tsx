import {
  AnimeStatistics,
  MangaStatistics,
} from "@/app/types/malStatisticsResponse";
import svgCircle from "../svgCircle";
import MalProfileBox from "./MalProfileBox";

function StatisticsBar({
  watching,
  completed,
  onHold,
  dropped,
  planToWatch,
}: {
  watching: number;
  completed: number;
  onHold: number;
  dropped: number;
  planToWatch: number;
}) {
  const total = watching + completed + onHold + dropped + planToWatch;
  const watchingWidth = (watching / total) * 100;
  const completedWidth = (completed / total) * 100;
  const onHoldWidth = (onHold / total) * 100;
  const droppedWidth = (dropped / total) * 100;
  const planToWatchWidth = (planToWatch / total) * 100;

  return (
    <span className="stats-graph mt8">
      <span
        className="graph anime watching"
        style={{ width: `${watchingWidth}%` }}
      />
      <span
        className="graph anime completed"
        style={{ width: `${completedWidth}%` }}
      />
      <span
        className="graph anime on_hold"
        style={{ width: `${onHoldWidth}%` }}
      />
      <span
        className="graph anime dropped"
        style={{ width: `${droppedWidth}%` }}
      />
      <span
        className="graph anime plan_to_watch"
        style={{ width: `${planToWatchWidth}%` }}
      />
    </span>
  );
}

function MalProfileStats({
  data,
  userName,
  stat,
  x,
  y,
}: {
  data: AnimeStatistics | MangaStatistics;
  userName: string;
  stat: "anime" | "manga";
  x?: number;
  y?: number;
}) {
  const isAnime = stat === "anime";

  const days = data.days_watched ?? data.days_read;
  const meanScore = data.mean_score;
  const watching = data.watching ?? data.reading;
  const completed = data.completed;
  const onHold = data.on_hold;
  const dropped = data.dropped;
  const planToWatch = data.plan_to_watch ?? data.plan_to_read;

  const totalEntries = data.total_entries;
  const rewatched = data.rewatched ?? data.reread;
  const episodes = data.episodes_watched ?? undefined;
  const chapters = data.chapters_read ?? undefined;
  const volumes = data.volumes_read ?? undefined;

  return (
    <MalProfileBox
      title={isAnime ? "Anime Stats" : "Manga Stats"}
      secondTitle={isAnime ? "All Anime Stats" : "All Manga Stats"}
      secondTitleHref={`https://myanimelist.net/profile/${userName}/statistics/${stat}-scores`}
      x={x ?? 0}
      y={y ?? 0}
    >
      <>
        <div className="stat-score di-t w100 pt8">
          <div className="di-tc al pl8 fs12 fw-b">
            <span className="fn-grey2 fw-n">Days: </span>
            {days}
          </div>
          <div className="di-tc ar pr8 fs12 fw-b">
            <span className="fn-grey2 fw-n">Mean Score: </span>
            <span className="score-label">{meanScore}</span>
          </div>
        </div>
        <StatisticsBar
          watching={watching}
          completed={completed}
          onHold={onHold}
          dropped={dropped}
          planToWatch={planToWatch}
        />
        <div className="mt12 ml8 mr8 clearfix">
          <ul className="stats-status fl-l">
            <li className="stats-status-li mb12">
              <a
                href={`https://myanimelist.net/${
                  isAnime ? "animelist" : "mangalist"
                }/Amayacrab?status=1`}
                className="status-text"
              >
                {svgCircle("f_watching")}
                {isAnime ? "Watching" : "Reading"}
              </a>
              <span className="di-ib lh10">{watching}</span>
            </li>
            <li className="stats-status-li mb12">
              <a
                href={`https://myanimelist.net/${
                  isAnime ? "animelist" : "mangalist"
                }/Amayacrab?status=2`}
                className="status-text"
              >
                {svgCircle("f_completed")}
                Completed
              </a>
              <span className="di-ib lh10">{completed}</span>
            </li>
            <li className="stats-status-li mb12">
              <a
                href={`https://myanimelist.net/${
                  isAnime ? "animelist" : "mangalist"
                }/Amayacrab?status=3`}
                className="status-text"
              >
                {svgCircle("f_on_hold")}
                On-Hold
              </a>
              <span className="di-iblh10">{onHold}</span>
            </li>
            <li className="stats-status-li mb12">
              <a
                href={`https://myanimelist.net/${
                  isAnime ? "animelist" : "mangalist"
                }/Amayacrab?status=4`}
                className="status-text"
              >
                {svgCircle("f_dropped")}
                Dropped
              </a>
              <span className="di-ib lh10">{dropped}</span>
            </li>
            <li className="stats-status-li mb12">
              <a
                href={`https://myanimelist.net/${
                  isAnime ? "animelist" : "mangalist"
                }/Amayacrab?status=6`}
                className="status-text"
              >
                {svgCircle("f_plan_to_watch")}
                {isAnime ? "Plan to Watch" : "Plan to Read"}
              </a>
              <span className="di-ib lh10">{planToWatch}</span>
            </li>
          </ul>
          <ul className="stats-data fl-r">
            <li className="clearfix mb12">
              <span className="di-ib fl-l fn-grey2">Total Entries</span>
              <span className="di-ib fl-r">{totalEntries}</span>
            </li>
            <li className="clearfix mb12">
              <span className="di-ib fl-l fn-grey2">
                {isAnime ? "Rewatched" : "Reread"}
              </span>
              <span className="di-ib fl-r">{rewatched}</span>
            </li>
            {isAnime ? (
              <li className="clearfix mb12">
                <span className="di-ib fl-l fn-grey2">Episodes</span>
                <span className="di-ib fl-r">{episodes}</span>
              </li>
            ) : (
              <>
                <li className="clearfix mb12">
                  <span className="di-ib fl-l fn-grey2">Chapters</span>
                  <span className="di-ib fl-r">{chapters}</span>
                </li>
                <li className="clearfix mb12">
                  <span className="di-ib fl-l fn-grey2">Volumes</span>
                  <span className="di-ib fl-r">{volumes}</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </>
    </MalProfileBox>
  );
}

export default MalProfileStats;
