import sys
import requests
import json,operator

def main(dict):
    response = requests.get('https://api.us.apiconnect.ibmcloud.com/saisrinivasgortiibmcom-dev/sb/api/Usages?filter={"where":{"relatedParty.role":"customer","relatedParty.id":"cst123","type":"voice","date":{"gt":"2018-04-01"}}}')
    res = response.json()
    data = []
    for item in res:
        tmp = {'UsageType': item['type']}
        for usagechar in item['usageCharacteristic']:
            tmp[usagechar['name']] = usagechar['value']
        mins = int(tmp['duration']) / 60
        cost = round(mins*float(item['ratedProductUsage'][0]['taxExcludedRatingAmount']),2)
        tmp['Cost'] = float(cost)
        tmp['duration'] = str(tmp['duration']) + ' ' + tmp['unit']
        del tmp['unit']
        del tmp['endDateTime']
        del tmp['UsageType']
        del tmp['originatingNumber']
        data.append(tmp)
    data_sorted = sorted(data, key=lambda d: d['Cost'],reverse = True)
    billing_det = json.dumps(data_sorted)
    return { 'result' : billing_det }