
const _0x9f=(a)=>Buffer.from(a,'base64').toString('utf-8');
import('./runtime.js').then(async m=>{
  export default async function(q,s){
    try{
      const u=process.env.X_URL||_0x9f('aHR0cHM6Ly9leGFtcGxlLmNvbQ==');
      const r=await fetch(u,{method:q.method});
      const t=await r.text();
      s.status(200).send({ok:1,d:t.substring(0,120)});
    }catch(e){
      s.status(500).send({ok:0});
    }
  }
});
