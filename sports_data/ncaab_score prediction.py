import pandas as pd
from sportsreference.ncaab.teams import Teams
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
# preprocess data and get rid of strings
FIELDS_TO_DROP = ['away_points', 'home_points', 'date', 'location',
                  'losing_abbr', 'losing_name', 'winner', 'winning_abbr',
                  'winning_name', 'home_ranking', 'away_ranking']

dataset = pd.DataFrame()
teams = Teams()
# for each team add to the dataframe all the stats..
# dataframe extended creates new index for each game
for team in teams:
    dataset = pd.concat([dataset, team.schedule.dataframe_extended])
    break  # only do one so it doesn't take as long for now... local save to file would save time in future
# 2 teams play at once.. drop duplicates
X = dataset.drop(FIELDS_TO_DROP, 1).dropna().drop_duplicates()
# create output set of scores to chack against
y = dataset[['home_points', 'away_points']].values
# sklearn makes training and testing subsets for you...ideally 75%train 25% test
X_train, X_test, y_train, y_test = train_test_split(X, y)

# hyperparameters are how you tweak the model to get better results

parameters = {'bootstrap': False,  # whole dataset used to build tree
              'min_samples_leaf': 3,  # min samples at a leaf node
              'n_estimators': 50,  # trees in the forest
              'min_samples_split': 10,  # min samples to split an internal node
              'max_features': 'sqrt',  # max features to consider, in this case sqrt of total features
              'max_depth': 6}  # max depth of the tree
model = RandomForestRegressor(**parameters)
# create the model fitted to our data
model.fit(X_train, y_train)
# run our predictions against the testing subset to see how well they fit
print(model.predict(X_test).astype(int), y_test)
