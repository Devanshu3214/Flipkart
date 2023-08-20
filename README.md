//Approach

Web App and Python scripts for recommendation have been developed separately
*************************************************************************************************************************************************************************
Database
    Our Recommendation system uses temporal data for user based recommendation and Dynamic Data for content based recommendation
        1. Generate Temporal data using event trackers in the website 
        2. Provide With Dynamic Data with features including trend,popularity
        
Recommendation System (Scripts Folder)
    1.Top N Recommend 
        Scipts takes up content data with features:
                1.Popularity 2.Trend 3.Discount 4.Demographic
        Provides N Recommendation based on Individual Category Scores

    2.Purchase Intent
        Scipts takes up temporal dataset(Time Series Data) regarding user events:
            1.Time stamp  2.Product Id  3.Add to cart event  4.Add to wishlist event
        Uses LSTM (Long Short Term Memory) based RNN model to provide intent to purchase for an item

    3.Data Clustering
        Script uses product desciption which contain size ,colour , stock and intent of purchase information to
            recommend product of the particular category which have maximum scores
*************************************************************************************************************************************************************************

Current Features:

1.User Authentication:
    1.Users can register and log in to the app using their credentials.
    2.User accounts allow for tracking individual browsing histories and interactions.

2.Browsing Products:
    1.The app displays a catalog of products obtained through web scraping from Flipkart.
    2.Users can browse products categorized by category, helping them find products of interest.

3.Product Details:
    1.Users can view detailed information about each product, including actual price, discounted price, size availability, category, and product image.

4.Cart and Wishlist:
    1.Users can add products to their cart for potential purchase.
    2.Users can add products to their wishlist to save items for future consideration.



Under Development Features:

Scripts for recommendation system have been prepared and placed in Scripts folder

Recommendation System:

    The primary focus of the app is to implement a recommendation system that suggests products to users based on their historical interactions, purchase history, and product similarity.
    Collaborative filtering and content-based filtering methods are being integrated to generate personalized recommendations.

Personalized User Profiles:
    Users will have profiles that store their preferences, purchase history, and interactions.
    These profiles will play a crucial role in generating accurate and relevant product recommendations.
    

Testing and Refinement:
User feedback and data-driven evaluations will be used to enhance the recommendation quality.

**************************************************************************************************************************************************************************************************************************************************************************************************************************************************