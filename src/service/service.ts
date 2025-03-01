import { IMatch } from "../types/types.ts";

const BASE_URL = "https://app.ftoyd.com/fronttemp-service/fronttemp";

export class ServiceApi {
  static getMatchList(): Promise<IMatch[]> {
    return fetch(BASE_URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data.data.matches);
  }
}
