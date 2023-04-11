import { FC } from "react";
import { seats } from "../../data/plane-seats";
import { SegmentSeatMap } from "../../types/IPlaneSeats";
import SeatRow from "../molecules/SeatRow";
import styled from "styled-components";

interface PlaneSegmentProps {
    segment: SegmentSeatMap;
}

// const Container = styled.div`
//     display: flex;
//     flex-direction: row;
//     /* justify-content: center; */
//     align-items: center;
//     gap: 10px;
// `;

const PlaneSegment: FC<PlaneSegmentProps> = ({ segment }) => {
    return (
        <div>
            {segment.rows.map((row) => (
                <SeatRow row={row} rowNumber={row.rowNumber} key={row.rowNumber} />
            ))}
        </div>
    );
};

export default PlaneSegment;
