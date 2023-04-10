import { FC } from "react";
import { seats } from "../data/plane-seats";
import PlaneSegment from "./PlaneSegment";

const Plane: FC = () => {
    return (
        <div>
            {seats.seatMap.segmentSeatMaps.map((segment) => (
                <PlaneSegment segment={segment} />
            ))}
        </div>
    );
};

export default Plane;
