from sportsreference.nhl.roster import Player
from sportsreference.mlb.schedule import Schedule
from sportsreference.mlb.boxscore import Boxscore
from sportsreference.nfl.schedule import Schedule
from sportsreference.nfl.teams import Teams
from sportsreference.ncaab.teams import Teams

# for team in Teams():
#   print(team.name, team.wins, team.losses)
# if you want info from a previous year
# for team in Teams('2018'):
# print(team.name, team.wins, team.losses)
# already integrated with pandas

# print datafram for each team
for team in Teams():
    print(team.name)
    print(team.dataframe)
# use .loc[] to access a single ron


for team in Teams():
    print(team.name)
    schedule = team.schedule  # Request the current team's schedule
    for game in schedule:
        print(game.date, game.points_scored, game.points_allowed)
# different way to access schedule

houston_schedule = Schedule('HOU')
for game in houston_schedule:
    print(game.date, game.points_scored, game.points_allowed)


# get boxscores

game_data = Boxscore('BOS/BOS201808020')
print(game_data.away_runs, game_data.home_runs)
print(game_data.dataframe)


# different way to get boxscores

houston_schedule = Schedule('HOU')
for game in houston_schedule:
    print(game.boxscore_index)  # Prints the boxscore URI for each game
    # Returns an instance of the Boxscore class for this specific game
    boxscore = game.boxscore

# get stats on a player

zetterberg = Player('zettehe01')
zetterberg('2017-18')
print(zetterberg.name, zetterberg.points, zetterberg.games_played)
