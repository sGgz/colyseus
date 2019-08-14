export interface RoomListingData {
  clients: number;
  locked: boolean;
  private: boolean;
  maxClients: number;
  metadata: any;
  name: string;
  processId: string;
  roomId: string;

  updateOne(operations: any);
  save();
  remove();
}

export interface QueryHelpers<T> {
  sort(options: any);
  then: Promise<T>["then"];
}

export interface MatchMakerDriver {
  createInstance(initialValues: any): RoomListingData;
  find(conditions: any): Promise<RoomListingData[]> | RoomListingData[];
  findOne(conditions: any): QueryHelpers<RoomListingData>;
}