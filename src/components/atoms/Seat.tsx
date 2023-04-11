import { FC } from "react";
import { seats } from "../../data/plane-seats";
import { Row, SegmentSeatMap } from "../../types/IPlaneSeats";
import styled from "styled-components";
import { ISeat } from "../../types/IPlaneSeats";

interface SeatProps extends ISeat {}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f6cbfc;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    color: #14544e;
`;

const Seat: FC<SeatProps> = ({ characteristics, price, seatKey: key, seatLetter, ailse }) => {
    return price ? <Container>{`${price?.amount}€`}</Container> : null;
};

export default Seat;
