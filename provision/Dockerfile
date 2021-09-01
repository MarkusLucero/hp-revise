FROM mongo
COPY hpdata.json /hpdata.json
CMD mongoimport --host mongodb --db harrypotter --collection characters --type json --file /hpdata.json --jsonArray
