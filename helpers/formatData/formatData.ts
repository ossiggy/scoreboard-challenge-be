import { formatMlbData } from "./mlbData";
import { formatNbaData } from "./nbaData";

import type { MlbGameStatsProps, NbaGameStatsProps } from "../types";
import type { GameStatsSchemaBaseProps } from "../../models";

type FormatDataType = (
  gameProps: MlbGameStatsProps | NbaGameStatsProps
) => GameStatsSchemaBaseProps;

//type guards for multiple argument types in "formatData".  Allows for 2 different types to be passed as the same arg.
export const isMlb = (
  gameProps: MlbGameStatsProps | NbaGameStatsProps
): gameProps is MlbGameStatsProps => gameProps.league === "MLB";

export const isNba = (
  gameProps: MlbGameStatsProps | NbaGameStatsProps
): gameProps is NbaGameStatsProps => gameProps.league === "NBA";

export const formatData: FormatDataType = (gameProps) => {
  const {
    feedUrl,
    league,
    officials,
    home_team,
    away_team,
    event_information,
    away_period_scores,
    home_period_scores,
  } = gameProps;

  const formattedData = {
    feedUrl,
    league,
    home_team,
    away_team,
    event_information,
    away_period_scores,
    home_period_scores,
    officials: officials.map((official) => {
      return {
        position: official.position || "",
        first_name: official.first_name,
        last_name: official.last_name,
      };
    }),
    updatedAt: new Date(),
  };

  let statsAndTotals;

  if (isMlb(gameProps)) {
    statsAndTotals = formatMlbData(gameProps);
  } else if (isNba(gameProps)) {
    statsAndTotals = formatNbaData(gameProps);
  }

  return { ...formattedData, ...statsAndTotals };
};
