import exportCSS from "../styles/MAL";

interface MalProfileBoxProps {
  children?: React.ReactNode;
}

function SvgContainer({ children }: MalProfileBoxProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="960"
    >
      {/* <style>{`@keyframes animation-gauge{0%{stroke-dasharray:0 329}}@keyframes animation-rainbow{0%,to{color:#7f00ff;fill:#7f00ff}14%{color:#a933ff;fill:#a933ff}29%{color:#007fff;fill:#007fff}43%{color:#00ff7f;fill:#00ff7f}57%{color:#ff0;fill:#ff0}71%{color:#ff7f00;fill:#ff7f00}86%{color:red;fill:red}}svg{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;color:#777}h2,h3{margin:8px 0 2px;padding:0;color:#0366d6;font-weight:400}h2 svg,h3 svg{fill:currentColor}h2{font-size:16px}h3,svg{font-size:14px}.h-details{margin:0 4px;padding-top:4px;font-size:.8rem}section&gt;.field{margin-left:5px;margin-right:5px}.field{display:flex;align-items:center;margin-bottom:2px;white-space:nowrap}.field.wrap,.row{flex-wrap:wrap}.field svg{margin:0 8px;fill:#959da5;flex-shrink:0}.row{display:flex}.horizontal .field,.row section{flex:1 1 0}.chart-bars .entry,.column{display:flex;flex-direction:column;align-items:center}.horizontal{justify-content:space-around}svg.bar{margin:4px 0}.chart{padding:0 8px}.chart-bars{display:flex;justify-content:space-between;align-items:flex-end;width:100%;margin:8px 0 4px;flex-grow:1;min-height:70px}.chart-bars .entry{flex-grow:1;font-size:10px;color:#666}.chart-bars .entry .value{font-size:6px}.chart-bars .bar{width:7px;background-color:var(--color-calendar-graph-day-bg);border:1px solid var(--color-calendar-graph-day-border);border-radius:5px}.chart-bars.horizontal{flex-direction:column;height:100%}.chart-bars.horizontal .entry{align-items:center;flex-direction:row;width:100%;min-height:1rem}.activity .field,.chart-bars.horizontal .entry .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chart-bars.horizontal .entry .name{flex-shrink:0;text-align:right;width:34%}.chart-bars.horizontal .bar{height:7px;width:auto;margin:0 6px}.activity{margin-bottom:12px}.activity .field{width:100%;max-width:450px;margin-bottom:0}:root{--color-calendar-graph-day-bg:#ebedf0;--color-calendar-graph-day-border:rgba(27,31,35,0.06);--color-calendar-graph-day-L1-bg:#9be9a8;--color-calendar-graph-day-L2-bg:#40c463;--color-calendar-graph-day-L3-bg:#30a14e;--color-calendar-graph-day-L4-bg:#216e39;--color-calendar-halloween-graph-day-L1-bg:#ffee4a;--color-calendar-halloween-graph-day-L2-bg:#ffc501;--color-calendar-halloween-graph-day-L3-bg:#fe9600;--color-calendar-halloween-graph-day-L4-bg:#03001c;--color-calendar-winter-graph-day-L1-bg:#0a3069;--color-calendar-winter-graph-day-L2-bg:#0969da;--color-calendar-winter-graph-day-L3-bg:#54aeff;--color-calendar-winter-graph-day-L4-bg:#b6e3ff;--color-calendar-graph-day-L4-border:rgba(27,31,35,0.06);--color-calendar-graph-day-L3-border:rgba(27,31,35,0.06);--color-calendar-graph-day-L2-border:rgba(27,31,35,0.06);--color-calendar-graph-day-L1-border:rgba(27,31,35,0.06)}#metrics-end{width:100%}`}</style> */}
      {/* @TODO Find a way to import CSS from a css file or something like that */}
      <style>{exportCSS()}</style>
      {children}
    </svg>
  );
}

export default SvgContainer;
