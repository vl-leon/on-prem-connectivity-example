(async () => {
  try {
    const cds = require ('@sap/cds')
    const onPremService = await cds.connect.to("OnPremService")
    let res = await onPremService.get("/odata/v4/test/Data")
    console.log(res)
    res = await onPremService.get("/odata/v4/test/OnPremService")
    console.log(res)
  } catch(e) {
    console.log(e)
  }

})()