function MalProfileStats() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="group"
      style={{ width: "50%", height: "100%", overflow: "visible" }}
    >
      <defs></defs>
      <style>{`@keyframes animation-gauge{0%{stroke-dasharray:0 329}}@keyframes animation-rainbow{0%,to{color:#7f00ff;fill:#7f00ff}14%{color:#a933ff;fill:#a933ff}29%{color:#007fff;fill:#007fff}43%{color:#00ff7f;fill:#00ff7f}57%{color:#ff0;fill:#ff0}71%{color:#ff7f00;fill:#ff7f00}86%{color:red;fill:red}}svg{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;color:#777}h2,h3{margin:8px 0 2px;padding:0;color:#0366d6;font-weight:400}h2 svg,h3 svg{fill:currentColor}h2{font-size:16px}h3,svg{font-size:14px}.h-details{margin:0 4px;padding-top:4px;font-size:.8rem}section&gt;.field{margin-left:5px;margin-right:5px}.field{display:flex;align-items:center;margin-bottom:2px;white-space:nowrap}.field.wrap,.row{flex-wrap:wrap}.field svg{margin:0 8px;fill:#959da5;flex-shrink:0}.row{display:flex}.horizontal .field,.row section{flex:1 1 0}.chart-bars .entry,.column{display:flex;flex-direction:column;align-items:center}.horizontal{justify-content:space-around}svg.bar{margin:4px 0}.chart{padding:0 8px}.chart-bars{display:flex;justify-content:space-between;align-items:flex-end;width:100%;margin:8px 0 4px;flex-grow:1;min-height:70px}.chart-bars .entry{flex-grow:1;font-size:10px;color:#666}.chart-bars .entry .value{font-size:6px}.chart-bars .bar{width:7px;background-color:var(--color-calendar-graph-day-bg);border:1px solid var(--color-calendar-graph-day-border);border-radius:5px}.chart-bars.horizontal{flex-direction:column;height:100%}.chart-bars.horizontal .entry{align-items:center;flex-direction:row;width:100%;min-height:1rem}.activity .field,.chart-bars.horizontal .entry .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chart-bars.horizontal .entry .name{flex-shrink:0;text-align:right;width:34%}.chart-bars.horizontal .bar{height:7px;width:auto;margin:0 6px}.activity{margin-bottom:12px}.activity .field{width:100%;max-width:450px;margin-bottom:0}:root{background-color:black!important;--color-calendar-graph-day-bg:#ebedf0;--color-calendar-graph-day-border:rgba(27,31,35,0.06);--color-calendar-graph-day-L1-bg:#9be9a8;--color-calendar-graph-day-L2-bg:#40c463;--color-calendar-graph-day-L3-bg:#30a14e;--color-calendar-graph-day-L4-bg:#216e39;--color-calendar-halloween-graph-day-L1-bg:#ffee4a;--color-calendar-halloween-graph-day-L2-bg:#ffc501;--color-calendar-halloween-graph-day-L3-bg:#fe9600;--color-calendar-halloween-graph-day-L4-bg:#03001c;--color-calendar-winter-graph-day-L1-bg:#0a3069;--color-calendar-winter-graph-day-L2-bg:#0969da;--color-calendar-winter-graph-day-L3-bg:#54aeff;--color-calendar-winter-graph-day-L4-bg:#b6e3ff;--color-calendar-graph-day-L4-border:rgba(27,31,35,0.06);--color-calendar-graph-day-L3-border:rgba(27,31,35,0.06);--color-calendar-graph-day-L2-border:rgba(27,31,35,0.06);--color-calendar-graph-day-L1-border:rgba(27,31,35,0.06)}#metrics-end{width:100%}`}</style>
      <style>{`.profile .user-statistics .user-statistics-stats .stats,.stats .stat-score{width:100%;text-align:left;font-family:Verdana,Arial;font-size:11px;color:#e0e0e0;background-color:#121212}.profile .user-statistics .user-statistics-stats .stats{display:table-cell;padding-right:8px}.stats .mb12{margin-bottom:12px!important}.stats .mt12{margin-top:12px!important}.stats .ml8{margin-left:8px!important}.stats .clearfix{display:block}.stats .stat-score{display:table;padding-top:8px}.stats .fl-l{float:left}.stats .fl-r{float:right}.stats .di-t{display:table!important}root{color:black!important}.stats .anime{color:#e0e0e0}.stats .anime .score-label{color:#e0e0e0}.stats .anime .graph{display:inline-block;height:10px}.stats .anime .graph.anime{margin-right:1px}.stats .anime .graph.anime.watching{background-color:#ffad1f}.stats .anime .graph.anime.completed{background-color:#2ecc71}.stats .anime .graph.anime.on_hold{background-color:#3498db}.stats .anime .graph.anime.dropped{background-color:#e74c3c}.stats .anime .graph.anime.plan_to_watch{background-color:#9b59b6}.stats .anime .stats-status{width:50%}.stats .anime .stats-data{width:50%}.stats .anime .stats-status,.stats .anime .stats-data{display:table-cell}.stats .anime .stats-status .circle,.stats .anime .stats-data .fn-grey2{display:inline-block}.stats .anime .stats-status .circle{width:10px;height:10px;border-radius:50%}.stats .anime .stats-status .circle.anime{margin-right:8px}.stats .anime .stats-status .circle.anime.watching{background-color:#ffad1f}.stats .anime .stats-status .circle.anime.completed{background-color:#2ecc71}.stats .anime .stats-status .circle.anime.on_hold{background-color:#3498db}.stats .anime .stats-status .circle.anime.dropped{background-color:#e74c3c}.stats .anime .stats-status .circle.anime.plan_to_watch{background-color:#9b59b6}.stats .anime .stats-data .fn-grey2{color:#777}.stats .anime .stats-data .fn-grey2,.stats .anime .stats-data .fn-grey2{font-size:12px}.stats .anime .stats-data .fn-grey2{font-weight:400}.stats .anime .stats-data .fn-grey2{margin-right:8px}.stats .anime .stats-data .fn-grey2{color:#e0e0e0}.stats .anime .stats-data .fn-grey2{font-weight:400}.stats .anime .stats-data .fn-grey2{font-size:12px}`}</style>
      <foreignObject width="50%" height="100%">
        <div
          className="stats anime"
          style={{
            display: "table-cell",
            paddingLeft: "8px",
          }}
        >
          <h5 className="mb12">
            <a
              className="floatRightHeader ff-Verdana"
              href="https://myanimelist.net/profile/Amayacrab/statistics/anime-scores"
            >
              All Anime Stats
            </a>
            Anime Stats
          </h5>
          <div className="stat-score di-t w100 pt8">
            <div className="di-tc al pl8 fs12 fw-b">
              <span className="fn-grey2 fw-n">Days: </span>59.2
            </div>
            <div className="di-tc ar pr8 fs12 fw-b">
              <span className="fn-grey2 fw-n">Mean Score: </span>
              <span className="score-label score-6">6.44</span>
            </div>
          </div>
          <div className="stats-graph mt8">
            <span className="graph anime watching" style={{ width: "8.4px" }} />
            <span
              className="graph anime completed"
              style={{ width: "268.1px" }}
            />
            <span className="graph anime on_hold" style={{ width: "8.4px" }} />
            <span className="graph anime dropped" style={{ width: "35.8px" }} />
            <span
              className="graph anime plan_to_watch"
              style={{ width: "59.1px" }}
            />
          </div>
          <div className="mt12 ml8 mr8 clearfix">
            <ul className="stats-status fl-l">
              <li className="clearfix mb12">
                <a
                  href="https://myanimelist.net/animelist/Amayacrab?status=1"
                  className="di-ib fl-l lh10 circle anime watching"
                >
                  Watching
                </a>
                <span className="di-ib fl-r lh10">8</span>
              </li>
              <li className="clearfix mb12">
                <a
                  href="https://myanimelist.net/animelist/Amayacrab?status=2"
                  className="di-ib fl-l lh10 circle anime completed"
                >
                  Completed
                </a>
                <span className="di-ib fl-r lh10">254</span>
              </li>
              <li className="clearfix mb12">
                <a
                  href="https://myanimelist.net/animelist/Amayacrab?status=3"
                  className="di-ib fl-l lh10 circle anime on_hold"
                >
                  On-Hold
                </a>
                <span className="di-ib fl-r lh10">8</span>
              </li>
              <li className="clearfix mb12">
                <a
                  href="https://myanimelist.net/animelist/Amayacrab?status=4"
                  className="di-ib fl-l lh10 circle anime dropped"
                >
                  Dropped
                </a>
                <span className="di-ib fl-r lh10">34</span>
              </li>
              <li className="clearfix mb12">
                <a
                  href="https://myanimelist.net/animelist/Amayacrab?status=6"
                  className="di-ib fl-l lh10 circle anime plan_to_watch"
                >
                  Plan to Watch
                </a>
                <span className="di-ib fl-r lh10">56</span>
              </li>
            </ul>
            <ul className="stats-data fl-r">
              <li className="clearfix mb12">
                <span className="di-ib fl-l fn-grey2">Total Entries</span>
                <span className="di-ib fl-r">360</span>
              </li>
              <li className="clearfix mb12">
                <span className="di-ib fl-l fn-grey2">Rewatched</span>
                <span className="di-ib fl-r">15</span>
              </li>
              <li className="clearfix mb12">
                <span className="di-ib fl-l fn-grey2">Episodes</span>
                <span className="di-ib fl-r">3,704</span>
              </li>
            </ul>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}

export default MalProfileStats;
