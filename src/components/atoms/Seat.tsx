import { FC } from "react";
import { seats } from "../../data/plane-seats";
import { Row, SegmentSeatMap } from "../../types/IPlaneSeats";
import styled from "styled-components";
import { ISeat } from "../../types/IPlaneSeats";

interface SeatProps extends ISeat {}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Seat: FC<SeatProps> = ({ characteristics, price, key, seatLetter, ailse }) => {
    return <Container></Container>;
};

export default Seat;
