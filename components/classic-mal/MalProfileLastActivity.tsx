/* eslint-disable @next/next/no-img-element */
import {
  LastUpdatesAnime,
  LastUpdatesManga,
} from "@/app/types/malLastUpdatesResponse";
import MalProfileBox from "./MalProfileBox";
import { format } from "date-fns";

interface LastUpdateItemProps {
  data: LastUpdatesAnime | LastUpdatesManga;
  stat: "anime" | "manga";
}

function ProgressBar(value: number, total: number, status = "completed") {
  // @TODO // implement progress bar like profile stats
  var percentage = (value / total) * 100;

  if (isNaN(percentage)) {
    percentage = 50;
  }

  return (
    <div className="progress-graph">
      <span
        className={`graph-inner anime ${status.toLowerCase()}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

function LastUpdateItem({ data, stat }: LastUpdateItemProps) {
  const isAnime = stat === "anime";
  const imgSrc =
    data.entry.images.jpg?.image_url ?? data.entry.images.webp?.image_url ?? "";

  const title = data.entry.title;
  const score = data.score;
  const status = data.status;
  const date = format(new Date(data.date), "MMM d, h:mm a");

  const episodes_seen = isAnime
    ? (data as LastUpdatesAnime).episodes_seen ?? 0
    : (data as LastUpdatesManga).chapters_read ?? 0;
  const episodes_total = isAnime
    ? (data as LastUpdatesAnime).episodes_total ?? 0
    : (data as LastUpdatesManga).chapters_total ?? 0;
  const animeHref = data.entry.url;

  return (
    <div className="flex w100 h100 mb8">
      <a href={animeHref} className="fl-l di-ib mr8 image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "40px", height: "56px" }}
        >
          <image width="40" xlinkHref={imgSrc} height="56" />
        </svg>
      </a>

      <div className="data flex-d w100">
        <a className="no-deco" href={animeHref}>
          {title}
        </a>
        <div className="flex pt8 w100 gap-8">
          {ProgressBar(episodes_seen, episodes_total, status)}
          <span className="fn-grey2 text-nowrap">{date}</span>
        </div>

        <div className="fn-grey2 flex gap-4 align-center">
          {status}
          <strong className="text-w">
            {episodes_seen === 0 ? "?" : episodes_seen}
          </strong>
          / {episodes_total === 0 ? "?" : episodes_total} · Scored
          <strong className="text-w">{score}</strong>
        </div>
      </div>
    </div>
  );
}

interface MalProfileStatsProps {
  data: LastUpdatesAnime[] | LastUpdatesManga[];
  userName: string;
  stat: "anime" | "manga";
  x?: number;
  y?: number;
}

function MalProfileLastActivity({
  data,
  userName,
  stat,
  x,
  y,
}: MalProfileStatsProps) {
  const isAnime = stat === "anime";
  return (
    <MalProfileBox
      title={isAnime ? "Last Anime Updates" : "Last Manga Updates"}
      secondTitle={isAnime ? "Anime History" : "Manga History"}
      secondTitleHref={`https://myanimelist.net/history/${userName}/${stat}`}
      x={x ?? 0}
      y={y ?? 0}
    >
      {data.map(
        (update: LastUpdatesAnime | LastUpdatesManga, index: number) => (
          <LastUpdateItem key={index} data={update} stat={stat} />
        )
      )}
    </MalProfileBox>
  );
}

export default MalProfileLastActivity;
