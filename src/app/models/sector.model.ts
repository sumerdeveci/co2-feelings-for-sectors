interface SectorModel {
  id: string;
  name: string;
}
export interface SectorsResponse {
  children: SectorModel[];
}