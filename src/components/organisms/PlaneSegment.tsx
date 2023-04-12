import { FC } from "react";
import { seats } from "../../data/plane-seats";
import { SegmentSeatMap } from "../../types/IPlaneSeats";
import SeatRow from "../molecules/SeatRow";
import styled from "styled-components";
import LetterRow from "../molecules/LetterRow";

interface PlaneSegmentProps {
    segment: SegmentSeatMap;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const PlaneSegment: FC<PlaneSegmentProps> = ({ segment }) => {
    const seatLetters = segment.rows[0].seats.map((seat) => seat.seatLetter);

    return (
        <Container>
            <h2>PLANE</h2>
            <LetterRow letters={seatLetters} />
            {segment.rows.map((row) => (
                <SeatRow row={row} rowNumber={row.rowNumber} key={row.rowNumber} />
            ))}
        </Container>
    );
};

export default PlaneSegment;
