const i=async(n,e)=>{const c=new TextDecoder("utf-8"),{done:r,value:a}=await n.read();if(r)return n.releaseLock();const t=c.decode(a,{stream:!0}).split("data:").map(s=>{const o=s.trim();if(o!==""&&o!=="[DONE]")return JSON.parse(s.trim())}).filter(s=>s).map(s=>s.choices.map(o=>o.delta.content).join("")).join("");return e.value instanceof Array?e.value[e.value.length-1].content+=t:e.value=e.value+=t,i(n,e)},m=n=>{const e=n.split("```").length-1;return e&&e%2!==0?n+"\n```\n":n};export{m as c,i as r};