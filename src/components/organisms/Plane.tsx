import { FC } from "react";
import { seats } from "../../data/plane-seats";
import PlaneSegment from "./PlaneSegment";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Plane: FC = () => {

    return (
        <Container>
            {seats.seatMap.segmentSeatMaps.map((segment) => (
                <PlaneSegment segment={segment} key={segment.segmentKey} />
            ))}
        </Container>
    );
};

export default Plane;
