import requests
from bs4 import BeautifulSoup

websites = [
    "https://nodejs.org/",
    "https://www.typescriptlang.org/",
    "https://p5js.org/",
    "https://d3js.org/",
    "https://threejs.org/"

]

if __name__ == "__main__":
    
    for website in websites:
        res = requests.get(website)
        soup = BeautifulSoup(res.text,features='lxml')
        links = list(soup.find_all(attrs={'rel':'icon'}))
        if len(links) > 0:
            iconLink = links[0]
            print(website+iconLink['href'])