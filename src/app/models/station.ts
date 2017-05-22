interface Location {
    city: string;
    country: string;
    coordinates: Array<number>;
}
interface Data {
    temperature: number;
    humidity: number;
}
export class Station {
    _id: string;
    location: Location;
    data: Data;
}

interface SensorData {
    temperature: number;
    humidity: number;
    savedAt: Date;
}
export interface StationData {
    _id: {
        device_id: string ;
        location: Location
    };
    data: SensorData;
}