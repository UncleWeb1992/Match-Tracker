export interface IPlayer {
  kills: number;
  username: string;
}

export interface ITeam {
  name: string;
  place: number;
  players: IPlayer[];
  points: number;
  total_kills: number;
}

export enum MatchStatus {
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
}

export interface IMatch {
  awayScore: number;
  awayTeam: ITeam;
  homeScore: number;
  homeTeam: ITeam;
  status: MatchStatus;
  time: string;
  title: string;
}
