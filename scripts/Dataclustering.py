# Product Cateogories K means Clustering 
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans

database_path = 'Database\product_database.csv'
product_categories='Database\product_categories.csv'

df = pd.read_csv(database_path)
tfidf_vectorizer = TfidfVectorizer(max_features=5000, stop_words='english')
product_descriptions = df['Product Description'].fillna('')
tfidf_matrix = tfidf_vectorizer.fit_transform(product_descriptions)


num_clusters = len(product_categories)
kmeans_model = KMeans(n_clusters=num_clusters, random_state=42)
kmeans_model.fit(tfidf_matrix)

def recommend_similar_products(product_id):
    product_index = df[df['Product ID'] == product_id].index[0]
    product_cluster = kmeans_model.labels_[product_index]

    cluster_indices = [index for index, label in enumerate(kmeans_model.labels_) if label == product_cluster]
    similar_product_ids = df.loc[cluster_indices, 'Product ID'].tolist()

    return similar_product_ids

input_product_id = input("Enter a product ID: ") #input from webapp


recommended_products = recommend_similar_products(input_product_id)
if recommended_products:
    print("Recommended similar product IDs:", recommended_products)
else:
    print("No similar products found.")
