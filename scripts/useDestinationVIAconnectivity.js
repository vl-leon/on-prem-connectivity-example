(async function () {

  const httpClient = require("@sap-cloud-sdk/http-client");
  const connectivity = require('@sap-cloud-sdk/connectivity');

  try {

    let dest = await connectivity.getDestinationFromDestinationService({destinationName: "on-prem-dest"})

    let res = await httpClient.executeHttpRequest(dest, {method: "GET", url: "/odata/v4/test/Data" }, {fetchCsrfToken: false})
    console.log(res.data)

    res = await httpClient.executeHttpRequest(dest, {method: "GET", url: "/odata/v4/test/OnPremService" }, {fetchCsrfToken: false})
    console.log(res.data)

  } catch (e) {
    console.log(e)
  }
})()



