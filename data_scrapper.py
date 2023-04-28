import requests
from bs4 import BeautifulSoup

url = "http://quotes.toscrape.com" # Replace with your desired URL

# Make a GET request to the URL
response = requests.get(url)

# Parse the HTML content using Beautiful Soup
soup = BeautifulSoup(response.text, "html.parser")

quotes = soup.findAll("span", attrs={"class":"text"})
authors = soup.findAll("small", attrs = {"class":"author"})
# Find all the links on the page

# Print out the URLs of the links
for quote in quotes:
    print(quote.text)
for author in authors:
    print(author.text)