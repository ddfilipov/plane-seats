import { FC } from "react";
import { seats } from "../data/plane-seats";
import { SegmentSeatMap } from "../types/IPlaneSeats";
import SeatRow from "./SeatRow";

interface PlaneSegmentProps {
    segment: SegmentSeatMap;
}

const PlaneSegment: FC<PlaneSegmentProps> = ({ segment }) => {
    return (
        <div>
            {segment.rows.map((row) => (
                <SeatRow row={row} rowNumber={row.rowNumber}/>
            ))}
        </div>
    );
};

export default PlaneSegment;
