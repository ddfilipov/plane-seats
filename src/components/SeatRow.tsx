import { FC } from "react";
import { seats } from "../data/plane-seats";
import { Row, SegmentSeatMap } from "../types/IPlaneSeats";

interface SeatRowProps {
    row: Row;
    rowNumber: number;
}

const SeatRow: FC<SeatRowProps> = ({ row, rowNumber }) => {
    return (
        <div>
            {rowNumber}:
            {row.seats.map((seat) => (
                <div>{seat.seatLetter}</div>
            ))}
        </div>
    );
};

export default SeatRow;
