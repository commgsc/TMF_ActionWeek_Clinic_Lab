import sys
import requests
import json
import datetime

def main(dict):
    response = requests.get('https://api.us.apiconnect.ibmcloud.com/tmedemousibmcom-dev/sb/api/UsageConsumptionReports?filter={"where":{"bucket.product.id":"mobile999"}}')
    res = response.json()
    buckets = res[0]['bucket']
    data = []
    for bucket in buckets:
        print(bucket)
        tmp = {'UsageType': bucket['usageType']}
        tmp['Usage'] = bucket['bucketCounter'][0]['value']
        tmp['Balanceleft'] = str(bucket['bucketBalance'][0]['remainingValue']) +' '+ bucket['bucketBalance'][0]['unit']
        data.append(tmp)
    usage_det = json.dumps(data)
    return { 'result':usage_det }