# js-datavisualisation-challenge

#### DOM :

- handling of the DOM:
- I was able to find the right selector to do it.
- I was able to inject the graph in the right place on the page via javascript.
- I was able to retrieve the html data in a format adapted to my javascript code.
  
#### AJAX/FETCH : 

- Request ajax/fetch:
- I was able to receive the answer from the remote server in json.
- Then, I was able to build a callback function to process this data.

#### Third Party Libraries :

- Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
- Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request.
- Specifically:
- I was able to generate the 2 inline data graphs.
- I was able to generate the "remote data" graph.
- I was able to build a callback function to process remote data (received via ajax).
- I was able to make the realtime graph refresh in real time.
- I was able to display the detailed data when I hover the mouse.
- 
#### problem-solving :

- Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
- Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request.
- Specifically:
- I was able to generate the 2 inline data graphs.
- I was able to generate the "remote data" graph.
- I was able to build a callback function to process remote data (received via ajax).
- I was able to make the realtime graph refresh in real time.
- I was able to display the detailed data when I hover the mouse.

## Inline data (data in the document) : 

### two data tables
- traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.
- If javascript is disabled, the graph does not appear. 
- If javascript is enabled, the graph appears between the title and the table.

### Remote data, in real-time, via ajax
- Retrieve the data via Ajax, and use it to insert a graph that refreshes every second, 
just below the main title (h1) of the article.
- take this example : https://canvasjs.com/docs/charts/how-to/live-updating-javascript-charts-json-api-ajax/
- use with this : https://www.chartjs.org/

if javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears.

## How will we do this?
- Vanilla Javascript = using javascript without libraries
+ https://www.chartjs.org/

 ## Break it down into small problems, into progressive steps
 1. First the DOM
 1. access the right place
 1. retrieve the data
 1. generate the graph

### A method of thinking:
- Reverse-engineering of your objective
- start at the end and go up the thread of dependencies to the starting point

### make questions : 
- To have a graph, you need data. So I have to get them back.
- Where is this data ?
- To have a graph I have to find the right place in the DOM, how can I do that?
- To get a graph I will use this library of data visualization. How does it work?

## Constraints
- dont edit the html file
- except to add a script.js to load your js. Dot not add css nor change the structure of the html
- javascript library is limited to the 2 libraries offered

## Help each other (to a certain extend)
- https://stackoverflow.com/help/how-to-ask
-  does not provide a ready-made code and does not code for the other.

## Evaluation

5. Debugging:
- I use the console to understand what is happening and compare what I am trying to program with what the machine is doing.

6. Separation of concerns:
- If I disable javascript, the user experience is satisfactory, the user has access to data and content
- If I enable javascript, the tables are enhanced with an interactive graph.

![graphs](https://media.giphy.com/media/jpuPU8rFX8WXY3wlRt/giphy-downsized.gif)
