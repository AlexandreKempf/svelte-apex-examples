To use:



1) `npm i -D vite-plugin-iso-import` in the bash
 
2) change `svelte.config.js`
```js
import { isoImport } from 'vite-plugin-iso-import'

{kit:
	vite: {plugins: [isoImport()]}}}
```

3) `import {Chart, Serie} from "svelte-apex?client"` note the `?client`

4) 
```js
<script>
	import { onMount } from "svelte";

	let clientside = false;

	onMount(() => {
		clientside = true;
	});
</script>

{#if clientside}
	<Chart>
		<Serie name="People" y={[5, 32, 15, 26, 42, 25, 14, 5, 19]} />
	</Chart>
{/if}
```


see here for more details https://stackoverflow.com/questions/69874742/sveltekit-console-error-window-is-not-defined-when-i-import-library
