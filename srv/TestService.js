const cds = require ('@sap/cds')

module.exports = class TestService extends cds.ApplicationService { init(){

  let OnPremService = undefined

  this.on (['READ'],'Data', async (req) => {
    return [{id:1,s:"one"}]
  })

  this.on (['READ'],'OnPremService', async (req) => {
    if(!OnPremService)
      OnPremService = await cds.connect.to("OnPremService")
    try {
      let res = await OnPremService.get("/odata/v4/test/Data")
      if(res) res.forEach(r => r.s='~'+r.s)
      return res
    } catch(err) {
      console.log(err.reason ? err.reason.errors : err)
      return [{id:500,s:""+err}]
    }
  })
  return super.init()
}}
