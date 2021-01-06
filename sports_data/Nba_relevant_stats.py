from datetime import datetime
import sportsreference
from sportsreference.nba.boxscore import Boxscore

games_today = Boxscore(datetime.today())
print(games_today.games)  # Prints a dictionary of all matchups for today

# Pulls all games between and including January 1, 2018 and January 5, 2018
games = Boxscore(datetime(2018, 1, 1), datetime(2018, 1, 5))
# Prints a dictionary of all results from January 1, 2018 and January 5,
# 2018
print(games.games)

# relevant stats

awayDefensiveRating = Boxscore.away_defensive_rating("201710310LAL")
awayEFGP = Boxscore.away_effective_field_goal_percentage("201710310LAL")
awayFGP = Boxscore.away_field_goal_percentage("201710310LAL")
awayOffensiveRating = Boxscore.away_offensive_rating("201710310LAL")
awayORebP = Boxscore.away_offensive_rebound_percentage("201710310LAL")
awayPoints = Boxscore.away_points("201710310LAL")
awayTrueShootP = Boxscore.away_true_shooting_percentage("201710310LAL")
awayTOPercent = Boxscore.away_turnover_percentage("201710310LAL")

homeDefensiveRating = Boxscore.home_defensive_rating("201710310LAL")
homeEFGP = Boxscore.home_effective_field_goal_percentage("201710310LAL")
homeFGP = Boxscore.home_field_goal_percentage("201710310LAL")
homeOffensiveRating = Boxscore.home_offensive_rating("201710310LAL")
homeORebP = Boxscore.home_offensive_rebound_percentage("201710310LAL")
homePoints = Boxscore.home_points("201710310LAL")
homeTrueShootP = Boxscore.home_true_shooting_percentage("201710310LAL")
homeTOPercent = Boxscore.home_turnover_percentage("201710310LAL")

# can get losing teams if needed

pace = Boxscore.pace("201710310LAL")  # poss per 40 mins

summary = Boxscore.summary("201710310LAL")  # array of score each quarter
