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
    seats: Seat[];
    rowNumber: number;
}

export interface Seat {
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
