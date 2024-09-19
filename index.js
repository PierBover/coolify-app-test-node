import {serve} from '@hono/node-server'
import {Hono} from 'hono'

const app = new Hono();

function wait () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
}

app.get('/', async (context) => {
	// waiting 1 seconds to test if deploys are zero downtime
	await wait();
	return context.text('Hello Coolify!');
});

app.get('/healthcheck', (context) => {
	return context.text('OK');
});

serve(app);