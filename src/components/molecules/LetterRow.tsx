import { FC } from "react";
import { Row } from "../../types/IPlaneSeats";
import styled from "styled-components";
import Seat from "../atoms/Seat";

interface LetterRowProps {
    letters: (string | null)[];
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;
const LetterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 40px;
    height: 40px;
`;
const EmptyLetter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 20px;
`;

const SeatRowWrapper = styled.div``;

const LetterRow: FC<LetterRowProps> = ({ letters }) => {
    return (
        <Container>
            {letters.map((letter) => {
                return letter ? <LetterWrapper>{letter}</LetterWrapper> : <EmptyLetter></EmptyLetter>;
            })}
        </Container>
    );
};

export default LetterRow;
