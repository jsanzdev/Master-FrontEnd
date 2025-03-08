export interface EpisodeEntityVm {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  characterCount: number;
}

export interface EpisodeCollectionVm {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: EpisodeEntityVm[];
}

export const createEmptyEpisodeCollection = (): EpisodeCollectionVm => ({
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
});
