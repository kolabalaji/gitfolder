import json

with open("test.json") as json_file:
    json_data = json.load(json_file);
    json_data["Search.StartDate"]=["03/12/2016 10:35:00 AM"];
    print(json_data)
   # print(json_data);
    