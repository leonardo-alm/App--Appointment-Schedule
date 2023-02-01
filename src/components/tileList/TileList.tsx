import { ITileListProps } from "../../interfaces/ITileListProps";
import { Tile } from "../tile/Tile";

export const TileList = (props: ITileListProps) => {
  const { tiles } = props
  return (
    <div>
      {
        tiles.map((tile, index) => {
          return <Tile tile={tile} key={index} />
        })
      }
    </div>
  );
};
