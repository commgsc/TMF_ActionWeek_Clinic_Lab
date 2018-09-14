import sys
import requests

def main(dict):
    response = requests.get('https://api.us.apiconnect.ibmcloud.com/tmedemousibmcom-dev/sb/api/BillingAccounts/acc111?filter={"fields":{"name":true,"state":true,"type":true,"accountBalance":true}}')
    res = response.json()
    accountbal = res['accountBalance']
    bal = accountbal[0]
    return { 'accountbal' : bal['amount']['value'],'startdatetime' : bal['validFor']['startDateTime'],'enddatetime' : bal['validFor']['endDateTime'] }
