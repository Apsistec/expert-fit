import { GymLocation } from './gym-locations.model';

export interface MapMarker{
  markerId: string;
  markerLatlng: number;
  markerLabel?: string;
  gymLocation?: GymLocation;
}
