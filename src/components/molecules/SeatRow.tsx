import { FC } from "react";
import { Row } from "../../types/IPlaneSeats";
import styled from "styled-components";
import Seat from "../atoms/Seat";

interface SeatRowProps {
    row: Row;
    rowNumber: number;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const SeatRow: FC<SeatRowProps> = ({ row, rowNumber }) => {
    return (
        <Container>
            {rowNumber}:
            {row.seats.map((seat) => (
                <Seat
                    ailse={seat.ailse}
                    characteristics={seat.characteristics}
                    seatKey={seat.seatKey}
                    price={seat.price}
                    seatLetter={seat.seatLetter}
                    key={seat.seatKey}
                />
            ))}
        </Container>
    );
};

export default SeatRow;
