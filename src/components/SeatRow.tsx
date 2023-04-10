import { FC } from "react";
import { seats } from "../data/plane-seats";
import { Row, SegmentSeatMap } from "../types/IPlaneSeats";

interface SeatRowProps {
    row: Row;
}

const SeatRow: FC<SeatRowProps> = ({ row }) => {
    return <div></div>;
};

export default SeatRow;
