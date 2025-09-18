
(async () => {
  const xsenv = require('@sap/xsenv')
  const xssec = require('@sap/xssec')
  const destinationCredentials = xsenv.serviceCredentials({ tag: 'destination' });
  const xsuaaService = new xssec.XsuaaService(destinationCredentials)
  const token = await xsuaaService.fetchClientCredentialsToken()
  const { executeHttpRequest } = require('@sap-cloud-sdk/http-client')
  const destinationName = 'on-prem-dest'
  const data = JSON.stringify({
    Name: destinationName,
    Type: 'HTTP',
    Description: 'on prem destination',
    URL: 'http://linux:4004',
    ProxyType: 'OnPremise',
    Authentication: 'NoAuthentication'
  })
  try {
  const response = await executeHttpRequest({
      url: destinationCredentials.uri + "/destination-configuration/v1/instanceDestinations" },{
      method: 'POST',headers: {
      "Authorization": "Bearer " + token.access_token,
      'X-CSRF-Token': 'None'},
      data
  })
  console.log("Create destination",destinationName,response.status,response.statusText)
} catch(e) {
  console.log("Failed to create destination",destinationName,e.status,e.response?.data)
}
})()
