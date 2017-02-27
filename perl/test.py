import json
jstr = '''{
   "EZMessage":{
      "action":"account.cash",
      "data":{
         "authToken":"123456",
         "account":"#ACCOUNTID#",
         "portfolio":"true",
         "historical":"true"
      }
   }
}'''

j = json.loads(jstr)
j['EZMessage']['data']['authToken'] = 654321
jstr = json.dumps(j)

jstr1='''{
        "payload": "{\"PerformAutomation\":
        {\"AutomationInputDictionary\":
        {\"Search.Phase\":\"Outage_CompletionPhase\",\"Search.StartDate\": \"02/12/2016 10:35:00 PM\",\"Search.EndDate\":\"02/12/2016 11:59:59 PM\"},
         \"ProcessName\":\"OutageProcess\",\"ProfileName\":\"NBNOutage\",\"APIVersion\":\"\",\"AppId\":\"\",\"CommandExecutionWindow\":\"\",\"CommandGenerationSource\":\"\",\"Country\":\"\",\"Instance\":\"\",\"PartnerId\":\"\",\"ReferenceCode\":\"\",\"Timestamp\":\"8:00 PM\",\"UserName\":\"SVC_HFC_PRD_RORobot\",\"VID\":\"\"}}",
        "content_type": "string",
        "content_encoding": "test/json",
        "profile": "NBNOutage",
        "expiration": 172800000,
        "app_id": "CDTool",
        "source_message_id": "CDTool",
        "header": null
}'''

j1=json.loads(jstr1)
j1['payload']['AutomationInputDictionary']['Search.StartDate']='05/12/2016 10:35:00 PM';

jstr1=json.dumps(j1);

