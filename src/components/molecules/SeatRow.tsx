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

const SeatRowWrapper = styled.div``;

const SeatRow: FC<SeatRowProps> = ({ row, rowNumber }) => {
    return (
        <Container>
            {row.characteristics.includes("EXIT") ? <p>EXIT</p> : null}
            {row.seats.map((seat) => (
                <Seat
                    ailse={seat.ailse}
                    characteristics={seat.characteristics}
                    seatKey={seat.seatKey}
                    price={seat.price}
                    seatLetter={seat.seatLetter}
                    key={seat.seatKey}
                    rowNumber={rowNumber}
                />
            ))}
            {row.characteristics.includes("EXIT") ? <p>EXIT</p> : null}
        </Container>
    );
};

export default SeatRow;
