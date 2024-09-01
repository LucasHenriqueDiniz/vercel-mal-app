import SvgContainer from "./SvgContainer";

interface MalProfileBoxProps {
  title: string;
  secondTitle: string;
  secondTitleHref?: string;
  children?: React.ReactNode;
  x?: number;
  y?: number;
}

function MalProfileBox({
  title,
  secondTitle,
  secondTitleHref,
  children,
  x,
  y,
}: MalProfileBoxProps) {
  return (
    <foreignObject width="480" height="250" x={x ?? 0} y={y ?? 0}>
      {/* @ts-ignore */}
      <div xmlns="http://www.w3.org/1999/xhtml" className="items-wrapper h100">
        <div className="stats h100">
          <h5 className="mb12 stat-title">
            <a className="floatRightHeader" href={secondTitleHref}>
              {secondTitle}
            </a>
            {title}
          </h5>
          <div className="container h100">{children}</div>
        </div>
      </div>
    </foreignObject>
  );
}

export default MalProfileBox;
