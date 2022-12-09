import { ParsedUrlQuery } from "querystring";

export interface WatchListInterface {
  item_id: string
  detail: {
    id: number
    type: string | string[] | undefined
  }
}

export interface InteractButtonInterface {
  id: number;
  query: ParsedUrlQuery;
  data: any;
}