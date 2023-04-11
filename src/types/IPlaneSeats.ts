export interface IPlaneSeats {
    seatMap: SeatMap;
}

export interface SeatMap {
    segmentSeatMaps: SegmentSeatMap[];
}

export interface SegmentSeatMap {
    rows: Row[];
    segmentKey: string;
    allPaxRequired: boolean;
}

export interface Row {
    characteristics: string[];
    seats: ISeat[];
    rowNumber: number;
}

export interface ISeat {
    characteristics: string[];
    price: Price | null;
    key: string;
    seatLetter: string | null;
    ailse: boolean;
}

export interface Price {
    amount: number;
    currency: string;
}
