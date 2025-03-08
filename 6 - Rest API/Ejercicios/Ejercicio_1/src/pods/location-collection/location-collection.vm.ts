export interface LocationEntityVm {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residentCount: number;
}

export interface LocationCollectionVm {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: LocationEntityVm[];
}

export const createEmptyLocationCollection = (): LocationCollectionVm => ({
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
});
