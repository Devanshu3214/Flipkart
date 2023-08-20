import pandas as pd
from sklearn.preprocessing import MinMaxScaler

# Load the CSV database into a DataFrame
database_path = 'product_database.csv'
df = pd.read_csv(database_path)

popularity_scores = df['Purchases'].apply(lambda x: 0.5 + 0.5 * (x / df['Purchases'].max()))


df['Release Date'] = pd.to_datetime(df['Release Date'])
max_date = df['Release Date'].max()
trend_scores = df['Release Date'].apply(lambda x: 0.5 + 0.5 * ((max_date - x).days / (max_date - df['Release Date'].min()).days))


demographics = df[['Age', 'Gender', 'Income']]
scaler = MinMaxScaler()
normalized_demographics = scaler.fit_transform(demographics)

user_profile = [0.7, 0.5, 0.6]
demographic_similarity_scores = normalized_demographics.dot(user_profile)


discount_scores = df['Discount Percentage'].apply(lambda x: x / 100)

popularity_weight = 0.4
trend_weight = 0.2
demographics_weight = 0.2
discount_weight = 0.2

combined_scores = (
    popularity_weight * popularity_scores +
    trend_weight * trend_scores +
    demographics_weight * demographic_similarity_scores +
    discount_weight * discount_scores
)

# Get the top N recommendations based on combined scores
N = 20
top_recommendations = df.iloc[combined_scores.argsort()[::-1][:N]]['Product ID'].tolist()

print("Top", N, "recommendations:", top_recommendations)
