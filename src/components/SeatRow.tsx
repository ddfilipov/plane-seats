import { FC } from "react";
import { seats } from "../data/plane-seats";
import { Row, SegmentSeatMap } from "../types/IPlaneSeats";
import styled from "styled-components";

interface SeatRowProps {
    row: Row;
    rowNumber: number;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const SeatRow: FC<SeatRowProps> = ({ row, rowNumber }) => {
    return (
        <Container>
            {rowNumber}:
            {row.seats.map((seat) => (
                <div>{seat.seatLetter}</div>
            ))}
        </Container>
    );
};

export default SeatRow;
