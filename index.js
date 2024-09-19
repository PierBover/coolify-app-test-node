import {serve} from '@hono/node-server'
import {Hono} from 'hono'

const app = new Hono();

function wait () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
}

app.get('/', async (context) => {
	// waiting 2 seconds to test if deploys are zero downtime
	await wait();
	return context.text('Hello Node.js!')
});

serve(app);