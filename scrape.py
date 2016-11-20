import requests, csv, json
from bs4 import BeautifulSoup
import time

with open("mobility1.csv") as infile:
    reader = csv.reader(infile)
    x = [item[1] for item in reader if item[4] == 'Georgia' if item[7].strip != '']

print(len(x))

counties = {}
for item in x:
    print(item)
    url = 'http://www.zillow.com/homes/for_sale/{0}-County-GA_rb/'.format(item)
    response = requests.get(url)
    soup = BeautifulSoup(response.content)
    urls = soup.find_all("a", class_="zsg-photo-card-overlay-link")

    # imgs = soup.find_all("img")
    # srcs = []
    # for image in imgs[1:len(imgs)-2]:
    #     if image.get("data-src") == None:
    #         srcs.append(image["src"])
    #     else:
    #         srcs.append(image["data-src"])

    results = []
    for i in range(len(urls)):
        href = urls[i]["href"]
        listing_response = requests.get("http://www.zillow.com" + href)

        listing = BeautifulSoup(listing_response.content)
        x = listing.find("div", class_="loan-calculator-container")
        if x != None:
            children = x.findChildren()
            monthly = children[1].text
        else:
            monthly = None

        y = listing.find("div", class_="home-summary-row")
        if y != None:
            children = y.findChildren()
            price = children[0].text
        else:
            price = None

        z = listing.find("ul", class_="photo-wall-content")
        if z != None:
            try:
                img = z.findChildren("img")[0]["src"]
            except:
                img = None
        else:
            img = None
        results.append({"url":href, "image": img, "monthly":monthly, "price":price})

    counties[item] = results

    with open("county_results1.json", "w") as out:
        json.dump(counties, out)
