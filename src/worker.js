
export default {
	async fetch(request, env, ctx) {
  
	  const before = Date.now();
	  console.time("fetch 10");
	  for (let i = 0; i < 10; i++) {
		await fetch("https://www.google.com/favicon.ico");
	  }
	  console.timeEnd("fetch 10");
	  const after = Date.now();
	  console.log(after-before)
  
	  return new Response('Hello World!');
	},
  };