import { FC } from "react";
import {seats} from "../data/plane-seats"
import { SegmentSeatMap } from "../types/IPlaneSeats";

interface PlaneSegmentProps{
    segment: SegmentSeatMap;
}

const PlaneSegment: FC<PlaneSegmentProps> = ({segment}) => {
    return <div>
    </div>;
};

export default PlaneSegment;
