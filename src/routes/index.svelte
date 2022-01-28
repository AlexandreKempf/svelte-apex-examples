<script>
	import {
		Chart,
		Serie,
		Title,
		Grid,
		XAxis,
		YAxis,
		Legend,
		Annotation,
		PlotOptions,
		Tooltip,
	} from "svelte-apex";
	import Prism from "svelte-prism";

	const h1_class =
		"text-lg leading-9 text-4xl font-black text-gray-900 m-10 mt-24";
	const h2_class =
		"text-md leading-6 text-2xl font-bold text-gray-900 m-3 mt-16";
	const chart_class =
		"xl:basis-1/3 h-1/2 m-5 p-5 my-auto shadow-lg rounded-lg md:basis-1/2 sm:basis-full";
	const code_class = "xl:basis-3/5 h-1/2 my-auto md:basis-1/2 sm:basis-full";
</script>

<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.min.css"
/>

<h1 class={h1_class}>📈 Line Charts</h1>

<h2 class={h2_class}>Simple</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart>
			<Serie name="People" y={[5, 32, 15, 26, 42, 25, 14, 5, 19]} />
		</Chart>
	</div>

	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart>
		<Serie name='People' y={[5, 32, 15, 26, 42, 25, 14, 5, 19]} />
	</Chart>
			`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Basic</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line">
			<Title title="Product Trends by Month" />
			<Serie
				type="line"
				name="Desktops"
				y={[10, 41, 35, 51, 49, 62, 69, 91, 148]}
				curve="straight"
			/>
			<XAxis
				title="Months"
				categories={[
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
				]}
			/>

			<Grid
				rowColors={["#f3f3f3", "transparent"]}
				rowOpacity={0.5}
				yLines={true}
			/>
		</Chart>
	</div>

	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line'>
		<Title title='Product Trends by Month' />
		<Serie type='line' name='Desktops' y={[10, 41, 35, 51, 49, 62, 69, 91, 148]} curve='straight' />
		<XAxis title='Months' categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']} />
		<Grid rowColors={['#f3f3f3', 'transparent']} rowOpacity={0.5} yLines={true} />
	</Chart>
			`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Line with Data Labels</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line" toolbar={false} datalabel={true} dropShadow={true}>
			<Title title="Average High & Low Temperature" />
			<Serie
				type="line"
				name="High - 2013"
				y={[28, 29, 33, 36, 32, 32, 33]}
				color="#77B6EA"
			/>
			<Serie
				type="line"
				name="Low - 2013"
				y={[12, 11, 14, 18, 17, 13, 13]}
				color="#545454"
			/>
			<XAxis
				title="Months"
				categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
			/>
			<YAxis title="Temperature" min={5} max={40} />
			<Legend
				show={true}
				floating={true}
				position="top"
				horizontalAlign="right"
				offsetY={-25}
				offsetX={5}
			/>
		</Chart>
	</div>

	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line' toolbar={false} datalabel={true} dropShadow={true}>
		<Title title='Average High & Low Temperature' />
		<Serie type='line' name='High - 2013' y={[28, 29, 33, 36, 32, 32, 33]} color='#77B6EA' />
		<Serie type='line' name='Low - 2013' y={[12, 11, 14, 18, 17, 13, 13]} color='#545454' />
		<XAxis title='Months' categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']} />
		<YAxis title='Temperature' min={5} max={40} />
		<Legend show={true} floating={true} position='top' horizontalAlign='right' offsetY={-25} offsetX={5} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Zoomable Timeserie</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="area" zoom={true}>
			<Title title="Stock Price Movement" />
			<Serie
				type="area"
				name="XYZ MOTORS"
				y={[
					0.152, 0.154, 0.158, 0.162, 0.164, 0.161, 0.156, 0.144,
					0.145, 0.142, 0.148, 0.152, 0.155, 0.164, 0.163, 0.124,
					0.115, 0.102, 0.106, 0.104, 0.105, 0.102, 0.073, 0.08,
					0.088, 0.102, 0.106, 0.104, 0.11, 0.114, 0.115, 0.119,
					0.119, 0.122, 0.119, 0.118, 0.12, 0.122, 0.124, 0.127,
					0.126, 0.129,
				]}
				x={[
					1440338400000, 1440511200000, 1440597600000, 1440684000000,
					1440770400000, 1440856800000, 1440943200000, 1441029600000,
					1441116000000, 1441202400000, 1441288800000, 1441375200000,
					1441461600000, 1441634400000, 1441720800000, 1441807200000,
					1441893600000, 1441980000000, 1442066400000, 1442152800000,
					1442239200000, 1442325600000, 1442412000000, 1442498400000,
					1442584800000, 1442671200000, 1442757600000, 1442844000000,
					1442930400000, 1443016800000, 1443103200000, 1443189600000,
					1443276000000, 1443362400000, 1443535200000, 1443621600000,
					1443708000000, 1444053600000, 1444140000000, 1444312800000,
					1444399200000, 1444485600000,
				]}
				fillType="gradient"
			/>
			<XAxis type="datetime" />
			<YAxis title="Price" min={0.07} max={0.17} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='area' zoom={true}>
		<Title title='Stock Price Movement' />
		<Serie type='area' name='XYZ MOTORS' y={yData}	x={xDataInSeconds} fillType='gradient' />
		<XAxis type='datetime' />
		<YAxis title='Price' min={0.07} max={0.17} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Line Chart with Annotations</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line" zoom={true} zoomType="xy">
			<Title title="Line with Annotations" />
			<Serie
				type="line"
				name="Cows"
				y={[38, 22, 25, 28, 31, 39, 36]}
				x={[2, 4, 6, 8, 10, 12, 14]}
			/>
			<YAxis title="Cows population" min={20} max={40} />
			<Annotation text="Too many cows" y={37} color="#FF4560" />
			<Annotation text="Covid-19" x={3} color="#FEB019" />
			<Annotation text="Point Annotation" x={8} y={28} color="#775DD0" />
			<Annotation text="Regeneration" x={[5, 10]} color="#00E396" />
			<Annotation text="Not enough cows" y={[21, 25]} color="#FF4560" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line' zoom={true} zoomType='xy'>
		<Title title='Line with Annotations' />
		<Serie type='line' name='Cows' y={[38, 22, 25, 28, 31, 39, 36]} x={[2, 4, 6, 8, 10, 12, 14]} />
		<YAxis title='Cows population' min={20} max={40} />
		<Annotation text='Too many cows' y={37} color='#FF4560' />
		<Annotation text='Covid-19' x={3} color='#FEB019' />
		<Annotation text='Point Annotation' x={8} y={28} color='#775DD0' />
		<Annotation text='Regeneration' x={[5, 10]} color='#00E396' />
		<Annotation text='Not enough cows' y={[21, 25]} color='#FF4560' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Stepline Chart</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line">
			<Title title="Stepline Chart" />
			<Serie
				type="line"
				name="napkins"
				curve="stepline"
				y={[34, 44, 54, 21, 15, 43, 33, 23, 66, 65, 58]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line'>
		<Title title='Stepline Chart' />
		<Serie type='line' name='napkins' curve='stepline' y={[34, 44, 54, 21, 15, 43, 33, 23, 66, 65, 58]} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Gradient Line</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line" zoom={true}>
			<Title title="Tips october" />
			<Serie
				type="line"
				name="tips"
				y={[34, 44, 54, 21, 12, 43, 33, 23, 66, 67, 58]}
				fillType="gradient"
			/>
			<XAxis
				type="datetime"
				categories={[
					"10/1/2021",
					"10/2/2021",
					"10/3/2021",
					"10/4/2021",
					"10/5/2021",
					"10/6/2021",
					"10/7/2021",
					"10/8/2021",
					"10/9/2021",
					"10/10/2021",
					"10/11/2021",
				]}
			/>
			<YAxis title="Dollars" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line' zoom={true}>
		<Title title='Tips october' />
		<Serie type='line' name='tips' y={[34, 44, 54, 21, 12, 43, 33, 23, 66, 67, 58]} fillType='gradient' />
		<XAxis type='datetime' categories={['10/1/2021', '10/2/2021', '10/3/2021', '10/4/2021', '10/5/2021', 
			'10/6/2021', '10/7/2021', '10/8/2021', '10/9/2021', '10/10/2021', '10/11/2021']} />
		<YAxis title='Dollars' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Missing value</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line">
			<Title title="Missing values" />
			<Serie
				name="Peter"
				width={5}
				curve="straight"
				size={5}
				y={[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]}
			/>
			<Serie
				name="Johnny"
				width={5}
				curve="straight"
				size={5}
				y={[
					0,
					5,
					null,
					2,
					null,
					10,
					2,
					5,
					null,
					2,
					12,
					null,
					14,
					null,
					9,
					10,
				]}
			/>
			<Serie
				name="David"
				width={5}
				curve="straight"
				size={5}
				y={[
					null,
					null,
					null,
					null,
					3,
					4,
					1,
					3,
					4,
					6,
					7,
					9,
					5,
					null,
					null,
					null,
				]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line'>
		<Title title='Missing values' />
		<Serie name='Peter' width={5} curve='straight' size={5} 
			y={[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]} />
		<Serie name='Johnny' width={5} curve='straight' size={5} 
			y={[0, 5, null, 2, null, 10, 2, 5, null, 2, 12, null, 14, null, 9, 10]} />
		<Serie name='David' width={5} curve='straight' size={5} 
			y={[null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h1 class={h1_class}>🟦 Area Charts</h1>

<h2 class={h2_class}>Basic</h2>
<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="area">
			<Title
				title="Fundamental Analysis of Stocks"
				subtitle="Price Movements"
			/>
			<Serie
				name="StockABC"
				y={[10, 41, 35, 51, 49, 62, 69, 91, 148]}
				curve="straight"
				fillType="gradient"
			/>
			<XAxis
				title="Months"
				categories={[
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
				]}
			/>
			<YAxis opposite={true} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='area'>
		<Title title='Fundamental Analysis of Stocks' subtitle='Price Movements' />
		<Serie name='StockABC' curve='straight' fillType='gradient' 
			y={[10, 41, 35, 51, 49, 62, 69, 91, 148]} />
		<XAxis title='Months' categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']} />
		<YAxis opposite={true} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Spline Area</h2>
<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="area" zoom={true}>
			<Serie
				name="serie1"
				y={[31, 40, 28, 51, 42, 109, 100]}
				fillType="gradient"
			/>
			<Serie
				name="serie2"
				y={[11, 32, 45, 32, 34, 52, 41]}
				fillType="gradient"
			/>
			<XAxis
				title="Time"
				type="datetime"
				categories={[
					"2018-09-19T00:00:00.000Z",
					"2018-09-19T01:30:00.000Z",
					"2018-09-19T02:30:00.000Z",
					"2018-09-19T03:30:00.000Z",
					"2018-09-19T04:30:00.000Z",
					"2018-09-19T05:30:00.000Z",
					"2018-09-19T06:30:00.000Z",
				]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
<Chart type='area' zoom={true}>
	<Serie name='serie1' y={[31, 40, 28, 51, 42, 109, 100]} fillType='gradient' />
	<Serie name='serie2' y={[11, 32, 45, 32, 34, 52, 41]} fillType='gradient' />
	<XAxis title='Time' type='datetime' 
		categories={['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', 
		'2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z','2018-09-19T04:30:00.000Z', 
		'2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']} />
</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Negative</h2>
<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="area" zoom={true}>
			<Serie
				name="serie1"
				y={[31, 32, 28, 45, 42, 32, 52]}
				fillType="gradient"
			/>
			<Serie
				name="serie2"
				y={[11, 0, -15, -25, 6, 10, -3]}
				fillType="gradient"
			/>
			<XAxis categories={[2015, 2016, 2017, 2018, 2019, 2020, 2021]} />
			<Legend show={true} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='area' zoom={true}>
		<Serie name='serie1' y={[31, 32, 28, 45, 42, 32, 52]} fillType='gradient' />
		<Serie name='serie2' y={[11, 0, -15, -25, 6, 10, -3]} fillType='gradient' />
		<XAxis categories={[2015, 2016, 2017, 2018, 2019, 2020, 2021]} />
		<Legend show={true} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Stacked</h2>
<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="area" zoom={true} stacked={true}>
			<Serie
				name="serie1"
				y={[31, 40, 28, 51, 42, 109, 100]}
				fillType="gradient"
			/>
			<Serie
				name="serie2"
				y={[11, 32, 45, 32, 34, 52, 41]}
				fillType="gradient"
			/>
			<Serie
				name="serie2"
				y={[120, 10, 25, 7, 38, 100, 34]}
				fillType="gradient"
			/>
			<XAxis
				title="Time"
				type="datetime"
				categories={[
					"2018-09-19T00:00:00.000Z",
					"2018-09-19T01:30:00.000Z",
					"2018-09-19T02:30:00.000Z",
					"2018-09-19T03:30:00.000Z",
					"2018-09-19T04:30:00.000Z",
					"2018-09-19T05:30:00.000Z",
					"2018-09-19T06:30:00.000Z",
				]}
			/>
			<Legend show={true} position="top" horizontalAlign="left" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='area' zoom={true} stacked={true}>
		<Serie name='serie1' y={[31, 40, 28, 51, 42, 109, 100]} fillType='gradient' />
		<Serie name='serie2' y={[11, 32, 45, 32, 34, 52, 41]} fillType='gradient' />
		<Serie name='serie2' y={[120, 10, 25, 7, 38, 100, 34]} fillType='gradient' />
		<XAxis title='Time' type='datetime' 
			categories={['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', 
			'2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', 
			'2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']} />
		<Legend show={true} position='top' horizontalAlign='left' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Irregular Timeseries</h2>
<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="area">
			<Serie
				name="PRODUCT A"
				y={[31, 40, 28, 51, 42, 109, 100]}
				x={[0, 1, 2, 3, 4, 5, 6]}
				fillType="solid"
				fillOpacity={1.0}
			/>
			<Serie
				name="PRODUCT C"
				y={[11, 32, 45, 32, 34, 52, 41]}
				x={[10, 11, 12, 13, 14, 15, 16]}
				fillType="gradient"
			/>
			<Serie
				name="PRODUCT B"
				y={[120, 150, 160, 186, 168, 120, 150]}
				x={[5, 6, 7, 8, 9, 10, 11]}
				fillType="gradient"
			/>
			<XAxis
				title="Time"
				type="numeric"
				categories={[
					0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
				]}
				tickAmount={16}
			/>
			<Legend show={true} position="top" horizontalAlign="left" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='area'>
		<Serie name='PRODUCT A' fillType='solid' fillOpacity={0.1} 
			y={[31, 40, 28, 51, 42, 109, 100]} x={[0, 1, 2, 3, 4, 5, 6]} />
		<Serie name='PRODUCT C' fillType='gradient' fillOpacity={1.0} 
			y={[11, 32, 45, 32, 34, 52, 41]} x={[10, 11, 12, 13, 14, 15, 16]} />
		<Serie name='PRODUCT B' fillType='gradient' fillOpacity={0.1} 
			y={[120, 150, 160, 186, 168, 120, 150]} x={[5, 6, 7, 8, 9, 10, 11]} />
		<XAxis title='Time' type='numeric' tickAmount={16} 
			categories={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]} />
		<Legend show={true} position='top' horizontalAlign='left' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Missing value</h2>
<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="area">
			<Title title="Missing values" />
			<Serie
				name="Johnny"
				fillType="gradient"
				width={5}
				y={[
					0,
					5,
					null,
					2,
					null,
					10,
					12,
					15,
					null,
					12,
					12,
					null,
					14,
					null,
					9,
					10,
				]}
			/>
			<Serie
				name="David"
				fillType="gradient"
				width={5}
				y={[
					null,
					null,
					null,
					null,
					13,
					4,
					11,
					13,
					14,
					6,
					17,
					9,
					5,
					null,
					null,
					null,
				]}
			/>
			<Serie
				name="Peter"
				fillType="gradient"
				width={5}
				y={[
					5,
					5,
					10,
					8,
					7,
					15,
					4,
					null,
					null,
					null,
					10,
					10,
					17,
					8,
					6,
					9,
				]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='area'>
		<Title title='Missing values' />
		<Serie name='Johnny' fillType='gradient' width={5} 
			y={[0, 5, null, 2, null, 10, 12, 15, null, 12, 12, null, 14, null, 9, 10]} />
		<Serie name='David' fillType='gradient' width={5} 
			y={[null, null, null, null, 13, 4, 11, 13, 14, 6, 17, 9, 5, null, null, null]} />
		<Serie name='Peter' fillType='gradient' width={5} 
			y={[5, 5, 10, 8, 7, 15, 4, null, null, null, 10, 10, 17, 8, 6, 9]} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h1 class={h1_class}>📊 Column Charts</h1>

<h2 class={h2_class}>Basic</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar">
			<Serie name="Net Profit" y={[44, 55, 57, 56, 61, 58, 63, 60, 66]} />
			<Serie name="Revenue" y={[76, 85, 101, 98, 87, 105, 91, 114, 94]} />
			<Serie
				name="Free Cash Flow"
				y={[35, 41, 36, 26, 45, 48, 52, 53, 41]}
			/>
			<XAxis
				categories={[
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
				]}
			/>
			<YAxis title="$ (thousands)" />
			<Legend show={true} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' zoom={true}>
		<Serie name='Net Profit' y={[44, 55, 57, 56, 61, 58, 63, 60, 66]} />
		<Serie name='Revenue' y={[76, 85, 101, 98, 87, 105, 91, 114, 94]} />
		<Serie name='Free Cash Flow' y={[35, 41, 36, 26, 45, 48, 52, 53, 41]} />

		<XAxis categories={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']} />
		<YAxis title='$ (thousands)' />
		<Legend show={true} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Stacked</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar" stacked={true} zoom={true} datalabel={true}>
			<Serie name="PRODUCT A" y={[44, 55, 41, 67, 22, 43]} />
			<Serie name="PRODUCT B" y={[13, 23, 20, 8, 13, 27]} />
			<Serie name="PRODUCT C" y={[11, 17, 15, 15, 21, 14]} />
			<Serie name="PRODUCT D" y={[21, 7, 25, 13, 22, 8]} />
			<Legend show={true} position="right" />
			<PlotOptions barBorderRadius={3} />
			<XAxis
				type="datetime"
				categories={[
					"01/01/2011 GMT",
					"01/02/2011 GMT",
					"01/03/2011 GMT",
					"01/04/2011 GMT",
					"01/05/2011 GMT",
					"01/06/2011 GMT",
				]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' stacked={true} zoom={true} datalabel={true}>
		<Serie name='PRODUCT A' y={[44, 55, 41, 67, 22, 43]} />
		<Serie name='PRODUCT B' y={[13, 23, 20, 8, 13, 27]} />
		<Serie name='PRODUCT C' y={[11, 17, 15, 15, 21, 14]} />
		<Serie name='PRODUCT D' y={[21, 7, 25, 13, 22, 8]} />

		<Legend show={true} position='right' />
		<PlotOptions barBorderRadius={3} />
		<XAxis type='datetime'
			categories={['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', 
			'01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT']} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Stacked 100%</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar" stacked="100%" zoom={true} datalabel={true}>
			<Serie name="PRODUCT A" y={[44, 55, 41, 67, 22, 43, 21, 49]} />
			<Serie name="PRODUCT B" y={[13, 23, 20, 8, 13, 27, 33, 12]} />
			<Serie name="PRODUCT C" y={[11, 17, 15, 15, 21, 14, 15, 13]} />
			<Legend show={true} position="right" />
			<XAxis
				categories={[
					"2011 Q1",
					"2011 Q2",
					"2011 Q3",
					"2011 Q4",
					"2012 Q1",
					"2012 Q2",
					"2012 Q3",
					"2012 Q4",
				]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' stacked='100%' zoom={true} datalabel={true}>
		<Serie name='PRODUCT A' y={[44, 55, 41, 67, 22, 43, 21, 49]} />
		<Serie name='PRODUCT B' y={[13, 23, 20, 8, 13, 27, 33, 12]} />
		<Serie name='PRODUCT C' y={[11, 17, 15, 15, 21, 14, 15, 13]} />
		<Legend show={true} position='right' />
		<XAxis categories={['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', 
			'2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4']} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Negative</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar" zoom={true}>
			<Serie
				name="PRODUCT A"
				y={[
					1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1,
					-6.09, 0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75,
					17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6,
					-41.1, -39.6, -37.6, -29.4, -21.4, -2.4,
				]}
			/>
			<YAxis title="Growth" />
			<PlotOptions
				barBorderRadius={1}
				barColumnWidth="80%"
				barColorRange={[-45, 0, "#FEB019"]}
			/>
			<PlotOptions barColorRange={[-100, -46, "#F15B46"]} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' zoom={true}>
		<Serie
			name='PRODUCT A'
			y={[1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07, 5.8,
				2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1,
				-39.6, -37.6, -29.4, -21.4, -2.4]} />
		<YAxis title='Growth' />
		<PlotOptions barBorderRadius={1} barColumnWidth='80%' barColorRange={[-45, 0, '#FEB019']} />
		<PlotOptions barColorRange={[-100, -46, '#F15B46']} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h1 class={h1_class}>🍫 Bar Charts</h1>

<h2 class={h2_class}>Basic</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar" horizontal="true">
			<Serie
				name="PIB"
				y={[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]}
			/>
			<XAxis
				title="PIB"
				categories={[
					"South Korea",
					"Canada",
					"United Kingdom",
					"Netherlands",
					"Italy",
					"France",
					"Japan",
					"United States",
					"China",
					"Germany",
				]}
			/>
			<YAxis title="Countries" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' horizontal='true'>
		<Serie name='PIB' y={[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]} />
		<XAxis title='PIB' categories={['South Korea', 'Canada', 'United Kingdom', 'Netherlands',
			'Italy', 'France', 'Japan', 'United States', 'China', 'Germany' ]} />
		<YAxis title='Countries' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Multiple Series</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar" horizontal="true" datalabel={true}>
			<Serie
				name="PIB"
				y={[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]}
			/>
			<Serie
				name="Average income"
				y={[580, 1100, 200, 470, 690, 456, 690, 1380, 876, 470]}
			/>
			<XAxis
				categories={[
					"South Korea",
					"Canada",
					"United Kingdom",
					"Netherlands",
					"Italy",
					"France",
					"Japan",
					"United States",
					"China",
					"Germany",
				]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' horizontal='true' datalabel={true}>
		<Serie name='PIB' y={[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]} />
		<Serie name='Average income' y={[580, 1100, 200, 470, 690, 456, 690, 1380, 876, 470]} />
		<XAxis categories={['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 
			'France', 'Japan', 'United States', 'China', 'Germany']} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Stacked</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar" stacked={true} horizontal="true" datalabel={true}>
			<Title title="Fiction Books Sales" />
			<Serie name="Marine Sprite" y={[44, 55, 41, 37, 22, 43, 21]} />
			<Serie name="Striking Calf" y={[53, 32, 33, 52, 13, 43, 32]} />
			<Serie name="Tank Picture" y={[12, 17, 11, 9, 15, 11, 20]} />
			<Serie name="Bucket Slope" y={[9, 7, 5, 8, 6, 9, 4]} />
			<Serie name="Reborn Kid" y={[25, 12, 19, 32, 25, 24, 10]} />
			<XAxis categories={[2008, 2009, 2010, 2011, 2012, 2013, 2014]} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' stacked={true} horizontal='true' datalabel={true}>
		<Title title='Fiction Books Sales' />

		<Serie name='Marine Sprite' y={[44, 55, 41, 37, 22, 43, 21]} />
		<Serie name='Striking Calf' y={[53, 32, 33, 52, 13, 43, 32]} />
		<Serie name='Tank Picture' y={[12, 17, 11, 9, 15, 11, 20]} />
		<Serie name='Bucket Slope' y={[9, 7, 5, 8, 6, 9, 4]} />
		<Serie name='Reborn Kid' y={[25, 12, 19, 32, 25, 24, 10]} />

		<XAxis categories={[2008, 2009, 2010, 2011, 2012, 2013, 2014]} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Stacked 100%</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar" stacked="100%" horizontal="true" datalabel={true}>
			<Title title="Fiction Books Sales" />
			<Serie name="Marine Sprite" y={[44, 55, 41, 37, 22, 43, 21]} />
			<Serie name="Striking Calf" y={[53, 32, 33, 52, 13, 43, 32]} />
			<Serie name="Tank Picture" y={[12, 17, 11, 9, 15, 11, 20]} />
			<Serie name="Bucket Slope" y={[9, 7, 5, 8, 6, 9, 4]} />
			<Serie name="Reborn Kid" y={[25, 12, 19, 32, 25, 24, 10]} />
			<XAxis categories={[2008, 2009, 2010, 2011, 2012, 2013, 2014]} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' stacked='100%' horizontal='true' datalabel={true}>
		<Title title='Fiction Books Sales' />

		<Serie name='Marine Sprite' y={[44, 55, 41, 37, 22, 43, 21]} />
		<Serie name='Striking Calf' y={[53, 32, 33, 52, 13, 43, 32]} />
		<Serie name='Tank Picture' y={[12, 17, 11, 9, 15, 11, 20]} />
		<Serie name='Bucket Slope' y={[9, 7, 5, 8, 6, 9, 4]} />
		<Serie name='Reborn Kid' y={[25, 12, 19, 32, 25, 24, 10]} />

		<XAxis categories={[2008, 2009, 2010, 2011, 2012, 2013, 2014]} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Bar with Negative Values</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar" stacked={true} horizontal="true">
			<Title title="Mauritius population pyramid 2011" />
			<Serie
				name="Females"
				y={[
					-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96,
					-4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
				]}
			/>
			<Serie
				name="Males"
				y={[
					0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3,
					4.1, 4.2, 4.5, 3.9, 3.5, 3,
				]}
			/>

			<XAxis
				title="Percent"
				categories={[
					"85+",
					"80-84",
					"75-79",
					"70-74",
					"65-69",
					"60-64",
					"55-59",
					"50-54",
					"45-49",
					"40-44",
					"35-39",
					"30-34",
					"25-29",
					"20-24",
					"15-19",
					"10-14",
					"5-9",
					"0-4",
				]}
			/>
			<Legend show={true} position="top" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' stacked={true} horizontal='true'>
		<Title title='Mauritius population pyramid 2011' />

		<Serie name='Females' y={[-0.8, -1.05, -1.06, -1.18, -1.4, 
			-2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4,
			-4.1, -3.4, -3.1, -2.8]} />
		<Serie name='Males' y={[ 0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 
			2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3 ]} />

		<XAxis title='Percent' categories={['85+', '80-84', '75-79', 
			'70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', 
			'35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', 
			'0-4']} />
		<Legend show={true} position='top' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Reversed Bars</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="bar" horizontal="true" datalabel={true}>
			<Serie
				name="PIB"
				y={[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]}
			/>
			<XAxis
				categories={[
					"South Korea",
					"Canada",
					"United Kingdom",
					"Netherlands",
					"Italy",
					"France",
					"Japan",
					"United States",
					"China",
					"Germany",
				]}
			/>
			<YAxis reversed={true} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='bar' horizontal='true' datalabel={true}>
		<Serie name='PIB' y={[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]} />
		<XAxis categories={['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 
		'Italy', 'France', 'Japan', 'United States', 'China', 'Germany']} />
		<YAxis reversed={true} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h1 class={h1_class}>🦾 Mixed Charts</h1>

<h2 class={h2_class}>Line & Columns</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line">
			<Title title="Traffic Sources" />
			<Serie
				name="Website"
				type="column"
				y={[440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]}
			/>
			<Serie
				name="Social"
				type="line"
				y={[23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]}
				size={4}
				curve="straight"
			/>
			<XAxis
				type="datetime"
				categories={[
					"01/01/2001",
					"02/01/2001",
					"03/01/2001",
					"04/01/2001",
					"05/01/2001",
					"06/01/2001",
					"07/01/2001",
					"08/01/2001",
					"09/01/2001",
					"10/01/2001",
					"11/01/2001",
					"12/01/2001",
				]}
			/>
			<YAxis title="Website Blog" />
			<YAxis title="Social Media" opposite={true} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line'>
		<Title title='Traffic Sources' />

		<Serie name='Website' type='column' 
			y={[440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]} />
		<Serie name='Social' type='line' curve='straight' size={4}
			y={[23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]} />

		<XAxis type='datetime' categories={['01/01/2001', '02/01/2001', '03/01/2001',
			'04/01/2001', '05/01/2001', '06/01/2001', '07/01/2001', '08/01/2001', 
			'09/01/2001', '10/01/2001', '11/01/2001', '12/01/2001']} />

		<YAxis title='Website Blog' />
		<YAxis title='Social Media' opposite={true} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Multiple YAxis</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line">
			<Title title="XYZ - Stock Analysis (2009 - 2016)" />
			<Serie
				name="Income"
				type="column"
				y={[1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]}
			/>
			<Serie
				name="Cash Flow"
				type="column"
				y={[1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]}
			/>
			<Serie
				name="Revenue"
				type="line"
				y={[20, 29, 37, 36, 44, 45, 50, 58]}
				size={4}
				curve="straight"
			/>
			<XAxis
				type="datetime"
				categories={[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]}
			/>
			<YAxis title="Income" color="#008FFB" axisBorder={true} />
			<YAxis
				title="Cash Flow"
				color="#00E396"
				opposite={true}
				axisBorder={true}
			/>
			<YAxis
				title="Revenue"
				color="#FEB019"
				opposite={true}
				axisBorder={true}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line'>
		<Title title='XYZ - Stock Analysis (2009 - 2016)' />

		<Serie name='Income' type='column' y={[1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]} />
		<Serie name='Cash Flow' type='column' y={[1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]} />
		<Serie name='Revenue' type='line' y={[20, 29, 37, 36, 44, 45, 50, 58]} size={4} curve='straight' />

		<XAxis type='datetime' categories={[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]} />
		
		<YAxis title='Income' color='#008FFB' axisBorder={true} />
		<YAxis title='Cash Flow' color='#00E396' opposite={true} axisBorder={true} />
		<YAxis title='Revenue' color='#FEB019' opposite={true} axisBorder={true} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Line & Area</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line">
			<Serie
				name="team A"
				type="area"
				fillOpacity="0.2"
				y={[44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]}
			/>
			<Serie
				name="team B"
				type="line"
				y={[65, 79, 55, 71, 53, 64, 47, 62, 54, 71, 53]}
			/>
			<XAxis
				type="datetime"
				categories={[
					"Dec 01",
					"Dec 02",
					"Dec 03",
					"Dec 04",
					"Dec 05",
					"Dec 06",
					"Dec 07",
					"Dec 08",
					"Dec 09",
					"Dec 10",
					"Dec 11",
				]}
			/>
			<YAxis title="serie A" />
			<YAxis title="serie B" opposite={true} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line'>
		<Serie name='team A' type='area' fillOpacity='0.2' 
			y={[44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]} />
		<Serie name='team B' type='line' y={[65, 79, 55, 71, 53, 64, 47, 62, 54, 71, 53]} />
		<XAxis type='datetime' categories={[ 'Dec 01', 'Dec 02', 'Dec 03', 'Dec 04','Dec 05', 
		'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09', 'Dec 10', 'Dec 11']} />
		<YAxis title='serie A' />
		<YAxis title='serie B' opposite={true} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Line & Column & Area</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line">
			<Serie
				name="team A"
				type="column"
				y={[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]}
			/>
			<Serie
				name="team B"
				type="area"
				fillOpacity={0.3}
				y={[44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]}
			/>
			<Serie
				name="team C"
				type="line"
				y={[30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]}
			/>
			<XAxis
				type="datetime"
				categories={[
					"01/01/2003",
					"02/01/2003",
					"03/01/2003",
					"04/01/2003",
					"05/01/2003",
					"06/01/2003",
					"07/01/2003",
					"08/01/2003",
					"09/01/2003",
					"10/01/2003",
					"11/01/2003",
				]}
			/>
			<YAxis title="Points" min={0} />
			<Legend />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line'>
		<Serie name='team A' type='column' y={[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]} />
		<Serie name='team B' type='area' fillOpacity={0.3} y={[44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]} />
		<Serie name='team C' type='line' y={[30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]} />
		<XAxis type='datetime' categories={['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003',
			'05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003']} />
		<YAxis title='Points' min={0} />
		<Legend />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Line & Scatter</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line">
			<Serie
				type="scatter"
				size={6}
				y={[2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3, 5.1]}
				x={[
					1, 1.2, 1.8, 2.3, 2.6, 2.9, 3.2, 3.8, 4.5, 4.9, 5.1, 7.1,
					9.18, 5.2,
				]}
			/>
			<Serie
				type="line"
				size={0}
				curve="straight"
				y={[2, 3, 4, 5, 6, 7]}
				x={[1, 2, 3, 4, 5, 6]}
			/>
			<XAxis type="numeric" min={0} />
			<YAxis min={0} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line'>
		<Serie type='scatter' size={6} y={[2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3, 5.1]}
			x={[1, 1.2, 1.8, 2.3, 2.6, 2.9, 3.2, 3.8, 4.5, 4.9, 5.1, 7.1, 9.18, 5.2]} />
		<Serie type='line' size={0} curve='straight' y={[2, 3, 4, 5, 6, 7]} x={[1, 2, 3, 4, 5, 6]} />
		<XAxis type='numeric' min={0} />
		<YAxis min={0} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h1 class={h1_class}>⏲️ Range Bar Charts</h1>

<h2 class={h2_class}>Basic</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="rangeBar" horizontal={true}>
			<Serie
				name="New product"
				y={[
					[
						new Date("2019-03-02").getTime(),
						new Date("2019-03-04").getTime(),
					],
					[
						new Date("2019-03-04").getTime(),
						new Date("2019-03-08").getTime(),
					],
					[
						new Date("2019-03-08").getTime(),
						new Date("2019-03-12").getTime(),
					],
					[
						new Date("2019-03-12").getTime(),
						new Date("2019-03-18").getTime(),
					],
				]}
				x={["Code", "Test", "Validation", "Deployment"]}
			/>
			<XAxis type="datetime" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='rangeBar' horizontal={true}>
		<Serie name='New product'
			y={[
				[new Date('2019-03-02').getTime(), new Date('2019-03-04').getTime()],
				[new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
				[new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
				[new Date('2019-03-12').getTime(), new Date('2019-03-18').getTime()]
			]}
			x={['Code', 'Test', 'Validation', 'Deployment']}
		/>
		<XAxis type='datetime' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Custom colors</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="rangeBar" horizontal={true}>
			<Serie y={[[10, 14]]} x={["Code"]} color="#FF4560" />
			<Serie y={[[15, 34]]} x={["Test"]} />
			<Serie y={[[12, 24]]} x={["Validation"]} color="#775DD0" />
			<Serie y={[[41, 44]]} x={["Production"]} />
			<PlotOptions barRangeBarGroupRows={true} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='rangeBar' horizontal={true}>
		<Serie y={[[10, 14]]} x={['Code']} color='#FF4560' />
		<Serie y={[[15, 34]]} x={['Test']} />
		<Serie y={[[12, 24]]} x={['Validation']} color='#775DD0' />
		<Serie y={[[41, 44]]} x={['Production']} />
		<PlotOptions barRangeBarGroupRows={true} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Multi-Series</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="rangeBar" horizontal={true}>
			<Serie
				name="Bob"
				y={[
					[10, 14],
					[15, 24],
					[30, 35],
				]}
				x={["Design", "Code", "Test"]}
			/>
			<Serie
				name="Sophie"
				y={[
					[5, 17],
					[17, 34],
					[20, 25],
				]}
				x={["Design", "Code", "Test"]}
			/>
			<Legend position="top" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='rangeBar' horizontal={true}>
		<Serie name='Bob' y={[[10, 14], [15, 24], [30, 35]]}
			x={['Design', 'Code', 'Test']} />
		<Serie name='Sophie' y={[[5, 17], [17, 34],	[20, 25]]}
			x={['Design', 'Code', 'Test']} />
		<Legend position='top' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Grouped Bars</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="rangeBar" horizontal={true}>
			<Serie
				name="Bob"
				y={[
					[10, 14],
					[15, 24],
					[30, 35],
				]}
				x={["Design", "Code", "Test"]}
			/>
			<Serie
				name="Sophie"
				y={[
					[15, 17],
					[24, 34],
					[22, 25],
				]}
				x={["Design", "Code", "Test"]}
			/>
			<PlotOptions barRangeBarGroupRows={true} />
			<Legend position="top" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='rangeBar' horizontal={true}>
		<Serie name='Bob' y={[[10, 14], [15, 24], [30, 35]]}
			x={['Design', 'Code', 'Test']} />
		<Serie name='Sophie' y={[[15, 17], [24, 34], [22, 25]]}
			x={['Design', 'Code', 'Test']} />
		<PlotOptions barRangeBarGroupRows={true} />
		<Legend position='top' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h1 class={h1_class}>🕯️ Candle Sticks Charts</h1>

<h2 class={h2_class}>Basic</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="candlestick">
			<Title title="Candle Chart" />
			<Serie
				x={[
					1538778600000, 1538780400000, 1538782200000, 1538784000000,
					1538785800000, 1538787600000, 1538789400000, 1538791200000,
					1538793000000, 1538794800000, 1538796600000, 1538798400000,
					1538800200000, 1538802000000, 1538803800000, 1538805600000,
					1538807400000, 1538809200000, 1538811000000, 1538812800000,
					1538814600000, 1538816400000, 1538818200000, 1538820000000,
					1538821800000, 1538823600000, 1538825400000, 1538827200000,
					1538829000000, 1538830800000, 1538832600000, 1538834400000,
					1538836200000, 1538838000000, 1538839800000, 1538841600000,
					1538843400000, 1538845200000, 1538847000000, 1538848800000,
					1538850600000, 1538852400000, 1538854200000, 1538856000000,
					1538857800000, 1538859600000, 1538861400000, 1538863200000,
					1538865000000, 1538866800000, 1538868600000, 1538870400000,
					1538872200000, 1538874000000, 1538875800000, 1538877600000,
					1538879400000, 1538881200000, 1538883000000, 1538884800000,
				]}
				y={[
					[6629.81, 6650.5, 6623.04, 6633.33],
					[6632.01, 6643.59, 6620, 6630.11],
					[6630.71, 6648.95, 6623.34, 6635.65],
					[6635.65, 6651, 6629.67, 6638.24],
					[6638.24, 6640, 6620, 6624.47],
					[6624.53, 6636.03, 6621.68, 6624.31],
					[6624.61, 6632.2, 6617, 6626.02],
					[6627, 6627.62, 6584.22, 6603.02],
					[6605, 6608.03, 6598.95, 6604.01],
					[6604.5, 6614.4, 6602.26, 6608.02],
					[6608.02, 6610.68, 6601.99, 6608.91],
					[6608.91, 6618.99, 6608.01, 6612],
					[6612, 6615.13, 6605.09, 6612],
					[6612, 6624.12, 6608.43, 6622.95],
					[6623.91, 6623.91, 6615, 6615.67],
					[6618.69, 6618.74, 6610, 6610.4],
					[6611, 6622.78, 6610.4, 6614.9],
					[6614.9, 6626.2, 6613.33, 6623.45],
					[6623.48, 6627, 6618.38, 6620.35],
					[6619.43, 6620.35, 6610.05, 6615.53],
					[6615.53, 6617.93, 6610, 6615.19],
					[6615.19, 6621.6, 6608.2, 6620],
					[6619.54, 6625.17, 6614.15, 6620],
					[6620.33, 6634.15, 6617.24, 6624.61],
					[6625.95, 6626, 6611.66, 6617.58],
					[6619, 6625.97, 6595.27, 6598.86],
					[6598.86, 6598.88, 6570, 6587.16],
					[6588.86, 6600, 6580, 6593.4],
					[6593.99, 6598.89, 6585, 6587.81],
					[6587.81, 6592.73, 6567.14, 6578],
					[6578.35, 6581.72, 6567.39, 6579],
					[6579.38, 6580.92, 6566.77, 6575.96],
					[6575.96, 6589, 6571.77, 6588.92],
					[6588.92, 6594, 6577.55, 6589.22],
					[6589.3, 6598.89, 6589.1, 6596.08],
					[6597.5, 6600, 6588.39, 6596.25],
					[6598.03, 6600, 6588.73, 6595.97],
					[6595.97, 6602.01, 6588.17, 6602],
					[6602, 6607, 6596.51, 6599.95],
					[6600.63, 6601.21, 6590.39, 6591.02],
					[6591.02, 6603.08, 6591, 6591],
					[6591, 6601.32, 6585, 6592],
					[6593.13, 6596.01, 6590, 6593.34],
					[6593.34, 6604.76, 6582.63, 6593.86],
					[6593.86, 6604.28, 6586.57, 6600.01],
					[6601.81, 6603.21, 6592.78, 6596.25],
					[6596.25, 6604.2, 6590, 6602.99],
					[6602.99, 6606, 6584.99, 6587.81],
					[6587.81, 6595, 6583.27, 6591.96],
					[6591.97, 6596.07, 6585, 6588.39],
					[6587.6, 6598.21, 6587.6, 6594.27],
					[6596.44, 6601, 6590, 6596.55],
					[6598.91, 6605, 6596.61, 6600.02],
					[6600.55, 6605, 6589.14, 6593.01],
					[6593.15, 6605, 6592, 6603.06],
					[6603.07, 6604.5, 6599.09, 6603.89],
					[6604.44, 6604.44, 6600, 6603.5],
					[6603.5, 6603.99, 6597.5, 6603.86],
					[6603.85, 6605, 6600, 6604.07],
					[6604.98, 6606.98, 6604.07, 6606.21],
				]}
			/>
			<XAxis type="datetime" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='candlestick'>
		<Title title='Candle Chart' />
		<Serie x={[1538778600000, 1538780400000, 1538782200000, ..., 1538884800000]}
			y={[
				[6629.81, 6650.5, 6623.04, 6633.33],
				[6632.01, 6643.59, 6620, 6630.11],
				[6630.71, 6648.95, 6623.34, 6635.65],
				..., 
				[6604.98, 6606.98, 6604.07, 6606.21]
			]} />
		<XAxis type='datetime' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Mixed plots</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="line">
			<Title title="Candle Chart & Line" />
			<Serie
				type="candlestick"
				width={1}
				x={[
					1538778600000, 1538780400000, 1538782200000, 1538784000000,
					1538785800000, 1538787600000, 1538789400000, 1538791200000,
					1538793000000, 1538794800000, 1538796600000, 1538798400000,
					1538800200000, 1538802000000, 1538803800000, 1538805600000,
					1538807400000, 1538809200000, 1538811000000, 1538812800000,
					1538814600000, 1538816400000, 1538818200000, 1538820000000,
					1538821800000, 1538823600000, 1538825400000, 1538827200000,
					1538829000000, 1538830800000, 1538832600000, 1538834400000,
					1538836200000, 1538838000000, 1538839800000, 1538841600000,
					1538843400000, 1538845200000, 1538847000000, 1538848800000,
					1538850600000, 1538852400000, 1538854200000, 1538856000000,
					1538857800000, 1538859600000, 1538861400000, 1538863200000,
					1538865000000, 1538866800000, 1538868600000, 1538870400000,
					1538872200000, 1538874000000, 1538875800000, 1538877600000,
					1538879400000, 1538881200000, 1538883000000, 1538884800000,
				]}
				y={[
					[6629.81, 6650.5, 6623.04, 6633.33],
					[6632.01, 6643.59, 6620, 6630.11],
					[6630.71, 6648.95, 6623.34, 6635.65],
					[6635.65, 6651, 6629.67, 6638.24],
					[6638.24, 6640, 6620, 6624.47],
					[6624.53, 6636.03, 6621.68, 6624.31],
					[6624.61, 6632.2, 6617, 6626.02],
					[6627, 6627.62, 6584.22, 6603.02],
					[6605, 6608.03, 6598.95, 6604.01],
					[6604.5, 6614.4, 6602.26, 6608.02],
					[6608.02, 6610.68, 6601.99, 6608.91],
					[6608.91, 6618.99, 6608.01, 6612],
					[6612, 6615.13, 6605.09, 6612],
					[6612, 6624.12, 6608.43, 6622.95],
					[6623.91, 6623.91, 6615, 6615.67],
					[6618.69, 6618.74, 6610, 6610.4],
					[6611, 6622.78, 6610.4, 6614.9],
					[6614.9, 6626.2, 6613.33, 6623.45],
					[6623.48, 6627, 6618.38, 6620.35],
					[6619.43, 6620.35, 6610.05, 6615.53],
					[6615.53, 6617.93, 6610, 6615.19],
					[6615.19, 6621.6, 6608.2, 6620],
					[6619.54, 6625.17, 6614.15, 6620],
					[6620.33, 6634.15, 6617.24, 6624.61],
					[6625.95, 6626, 6611.66, 6617.58],
					[6619, 6625.97, 6595.27, 6598.86],
					[6598.86, 6598.88, 6570, 6587.16],
					[6588.86, 6600, 6580, 6593.4],
					[6593.99, 6598.89, 6585, 6587.81],
					[6587.81, 6592.73, 6567.14, 6578],
					[6578.35, 6581.72, 6567.39, 6579],
					[6579.38, 6580.92, 6566.77, 6575.96],
					[6575.96, 6589, 6571.77, 6588.92],
					[6588.92, 6594, 6577.55, 6589.22],
					[6589.3, 6598.89, 6589.1, 6596.08],
					[6597.5, 6600, 6588.39, 6596.25],
					[6598.03, 6600, 6588.73, 6595.97],
					[6595.97, 6602.01, 6588.17, 6602],
					[6602, 6607, 6596.51, 6599.95],
					[6600.63, 6601.21, 6590.39, 6591.02],
					[6591.02, 6603.08, 6591, 6591],
					[6591, 6601.32, 6585, 6592],
					[6593.13, 6596.01, 6590, 6593.34],
					[6593.34, 6604.76, 6582.63, 6593.86],
					[6593.86, 6604.28, 6586.57, 6600.01],
					[6601.81, 6603.21, 6592.78, 6596.25],
					[6596.25, 6604.2, 6590, 6602.99],
					[6602.99, 6606, 6584.99, 6587.81],
					[6587.81, 6595, 6583.27, 6591.96],
					[6591.97, 6596.07, 6585, 6588.39],
					[6587.6, 6598.21, 6587.6, 6594.27],
					[6596.44, 6601, 6590, 6596.55],
					[6598.91, 6605, 6596.61, 6600.02],
					[6600.55, 6605, 6589.14, 6593.01],
					[6593.15, 6605, 6592, 6603.06],
					[6603.07, 6604.5, 6599.09, 6603.89],
					[6604.44, 6604.44, 6600, 6603.5],
					[6603.5, 6603.99, 6597.5, 6603.86],
					[6603.85, 6605, 6600, 6604.07],
					[6604.98, 6606.98, 6604.07, 6606.21],
				]}
			/>
			<Serie
				type="line"
				x={[1538778600000, 1538884800000]}
				y={[6640, 6610]}
				color="#FEB019"
			/>
			<XAxis type="datetime" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type='line'>
		<Title title='Candle Chart' />
		<Serie type='candlestick' width={1} x={[1538778600000, 1538780400000, 1538782200000, ..., 1538884800000]}
			y={[
				[6629.81, 6650.5, 6623.04, 6633.33],
				[6632.01, 6643.59, 6620, 6630.11],
				[6630.71, 6648.95, 6623.34, 6635.65],
				..., 
				[6604.98, 6606.98, 6604.07, 6606.21]
			]} />
		<Serie type='line' x={[1538778600000, 1538884800000]} y={[6640, 6610]} color='#FEB019' />
		<XAxis type='datetime' />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h1 class={h1_class}>🐻 Box Plot</h1>

<h2 class={h2_class}>Basic</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="boxPlot">
			<Serie
				x={[
					"Jan 2015",
					"Jan 2016",
					"Jan 2017",
					"Jan 2018",
					"Jan 2019",
					"Jan 2020",
					"Jan 2021",
				]}
				y={[
					[54, 66, 69, 75, 88],
					[43, 65, 69, 76, 81],
					[31, 39, 45, 51, 59],
					[39, 46, 55, 65, 71],
					[29, 31, 35, 39, 44],
					[41, 49, 58, 61, 67],
					[54, 59, 66, 71, 88],
				]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type="boxPlot">
		<Serie
			x={['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021']}
			y={[
				[54, 66, 69, 75, 88],
				[43, 65, 69, 76, 81],
				[31, 39, 45, 51, 59],
				[39, 46, 55, 65, 71],
				[29, 31, 35, 39, 44],
				[41, 49, 58, 61, 67],
				[54, 59, 66, 71, 88]
			]}
		/>
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Outliers Scatter</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="boxPlot">
			<Serie
				x={[10, 20, 30, 40, 50, 60, 70]}
				y={[
					[54, 66, 69, 75, 88],
					[43, 65, 69, 76, 81],
					[31, 39, 45, 51, 59],
					[39, 46, 55, 65, 71],
					[29, 31, 35, 39, 44],
					[41, 49, 58, 61, 67],
					[54, 59, 66, 71, 88],
				]}
			/>
			<Serie
				type="scatter"
				name="outliers high"
				size={4}
				color="#00E396"
				y={[100, 65, 70, 78]}
				x={[10, 30, 50, 50]}
			/>
			<Serie
				type="scatter"
				name="outliers low"
				size={4}
				color="#008FFB"
				y={[40, 25, 30, 38]}
				x={[10, 40, 70, 70]}
			/>
			<Tooltip intersect={true} shared={false} />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type="boxPlot">
		<Serie x={[10, 20, 30, 40, 50, 60, 70]}
			y={[[54, 66, 69, 75, 88],
				[43, 65, 69, 76, 81],
				[31, 39, 45, 51, 59],
				[39, 46, 55, 65, 71],
				[29, 31, 35, 39, 44],
				[41, 49, 58, 61, 67],
				[54, 59, 66, 71, 88]]} />
		<Serie type="scatter" name="outliers high" size={4} color="#00E396"
			y={[100, 65, 70, 78]} x={[10, 30, 50, 50]} />
		<Serie type="scatter" name="outliers low" size={4} color="#008FFB"
			y={[40, 25, 30, 38]} x={[10, 40, 70, 70]} />
		<Tooltip intersect={true} shared={false} />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Horizontal BoxPlots</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="boxPlot" horizontal={true}>
			<Serie
				width={2}
				x={[
					"Jan 2015",
					"Jan 2016",
					"Jan 2017",
					"Jan 2018",
					"Jan 2019",
					"Jan 2020",
					"Jan 2021",
				]}
				y={[
					[54, 66, 69, 75, 88],
					[43, 65, 69, 76, 81],
					[31, 39, 45, 51, 59],
					[39, 46, 55, 65, 71],
					[29, 31, 35, 39, 44],
					[41, 49, 58, 61, 67],
					[54, 59, 66, 71, 88],
				]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type="boxPlot" horizontal={true}>
		<Serie width={2}
			x={['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021']}
			y={[
				[54, 66, 69, 75, 88],
				[43, 65, 69, 76, 81],
				[31, 39, 45, 51, 59],
				[39, 46, 55, 65, 71],
				[29, 31, 35, 39, 44],
				[41, 49, 58, 61, 67],
				[54, 59, 66, 71, 88]
			]}
		/>
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h1 class={h1_class}>🥧 Pie Chart</h1>

<h2 class={h2_class}>Basic</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="pie" datalabel={true}>
			<Serie
				x={["Team A", "Team B", "Team C", "Team D", "Team E"]}
				y={[44, 55, 13, 43, 22]}
			/>
			<Legend position="right" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type="pie" datalabel={true}>
		<Serie x={['Team A', 'Team B', 'Team C', 'Team D', 'Team E']} y={[44, 55, 13, 43, 22]} />
		<Legend position="right" />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Donut</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="donut" datalabel={true}>
			<Serie
				x={["Team A", "Team B", "Team C", "Team D", "Team E"]}
				y={[44, 55, 13, 43, 22]}
			/>
			<Legend position="right" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type="donut" datalabel={true}>
		<Serie x={['Team A', 'Team B', 'Team C', 'Team D', 'Team E']} y={[44, 55, 13, 43, 22]} />
		<Legend position="right" />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h2 class={h2_class}>Gradient Donut</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="donut">
			<Serie
				x={["Team A", "Team B", "Team C", "Team D", "Team E"]}
				y={[44, 55, 13, 43, 22]}
				fillType="gradient"
			/>
			<Legend position="right" />
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type="donut">
		<Serie x={['Team A', 'Team B', 'Team C', 'Team D', 'Team E']} y={[44, 55, 13, 43, 22]} 
			fillType="gradient"/>
		<Legend position="right" />
	</Chart>
		`}
		</Prism>
	</div>
</div>

<h1 class={h1_class}>📻 Radar Chart</h1>

<h2 class={h2_class}>Basic</h2>

<div class="flex flex-row flex-wrap">
	<div class={chart_class}>
		<Chart type="radar">
			<Serie y={[80, 50, 30, 40, 100, 20]} />
			<XAxis
				categories={[
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
				]}
			/>
		</Chart>
	</div>
	<div class={code_class}>
		<Prism language="svelte">
			{`
	<Chart type="radar">
		<Serie y={[80, 50, 30, 40, 100, 20]} />
		<XAxis categories={['January', 'February', 'March', 'April', 'May', 'June']} />
	</Chart>
		`}
		</Prism>
	</div>
</div>
