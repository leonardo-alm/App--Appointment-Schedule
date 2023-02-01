import { ITileProps } from "../../interfaces/ITileProps";

export const Tile = (props: ITileProps) => {
  const { tile } = props
  return (
    <div className="tile-container">
      {
        Object.values(tile).map((val, index) => {
          return <p key={index} className={index === 0 ? "tile-title" : "tile"}>{val}</p>
        })
      }
    </div>
  );
};
