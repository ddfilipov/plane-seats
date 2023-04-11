import { FC } from "react";
import { seats } from "../../data/plane-seats";
import { Row, SegmentSeatMap } from "../../types/IPlaneSeats";
import styled from "styled-components";
import { ISeat } from "../../types/IPlaneSeats";

interface SeatProps extends ISeat {
    rowNumber: number;
}

interface IAvailableSeat {
    isSeatAvailable: boolean;
}

const SeatWrapper = styled.div<IAvailableSeat>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.isSeatAvailable ? "#f6cbfc" : "#E6E6E6")};
    border-radius: 10px;
    width: 40px;
    height: 40px;
    color: #14544e;
`;
const AilseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 20px;
    color: #595c73;
`;

const Seat: FC<SeatProps> = ({ characteristics, price, seatKey: key, seatLetter, ailse, rowNumber }) => {
    const seatPrice = price ? price.amount.toString() : "X";
    return !ailse ? (
        <SeatWrapper isSeatAvailable={price ? true : false}>{`${seatPrice}`}</SeatWrapper>
    ) : (
        <AilseWrapper>{rowNumber}</AilseWrapper>
    );
};

export default Seat;
