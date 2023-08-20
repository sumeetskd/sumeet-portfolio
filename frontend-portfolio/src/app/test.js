const Koa require("koa");

const Router = require("koa-router");

const bodyparser = require("koa-bodyparser")
const dataops = require("./configs");
const cors require('@koa/cors' ); 
const streams = require('./interlace")

const (webauth, svcauth, oktasvctoken) = require('@trv/hsp-streams/lib/oktauth")

const app new koa();

const router = new Router({ prefix: "/hspconfig/api/v1"})

app.use(bodyparser()); 
app.use(cors()); 
let congiproc = {};

dataops().then(a -> { 
    congiproc = a; 
    app.emit("dataprocessed");
});

//AuthorisationCode Flow with PKCE router.use("/configui/, webauth)
//basic route to check if api is up

router.get("/", async ctx -> { 
    console.log("Basic route- hello!");
    ctx.body = {message: "Hello Koo" };
}


//Get infrastructure_config 
router.get("/infraconfig", async (ctx) -> {

}
    //Get Trace id

router.get("/runtimedata", async ctx

=> {

try {

const data = await congiproc.runtimedata();

if (data = null) {

ctx.body= data;

62

} else {

63 64

ctx. throw(484, 'Content not found from the runtime configuration')

}

catch (error) {

console.log("Unable to Retrieve runtime datall" + error); ctx. throw(500, error);

61

65

66

67

68

69

});

70

71

72

73

74

75

76

77 78

// Get approver Groups for Applciation router.get("/approvergroup", async ctx => {

let appdata;

try {

appdata = await congiproc.getappdata(ctx.request.querystring);

} catch (error) {

console.log("Unable to Get the Groups for given Application: " +

error);

ctx. throw(500, error);

I

if (appdata = null) { ctx.body appdata;

} else {

const data= await congiproc.getgroups(ctx.request.querystring);