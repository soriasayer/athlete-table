# Overview
I have used `react-table` and an npm package that is just an HOC (higher order component) for `react-table` which adds column draggable feature to it. This codling challenge has the following features:

## Features:

-  Sorting data by one or multiple columns by holding the shift key
-  Change the position of the columns by dragging and dropping it
-  Resizing the column width
-  Filtering data by each column
-  Pagination

## Run it locally
Execute the following commands on your terminal
```
git clone https://github.com/soriasayer/athlete-table
cd athlete-table
npm i
npm start
```

## Check it online
You can access a deployed version from [this link](http://athlete-table.surge.sh/)

# Notes: 
* The base URL can be moved to .env file
* The npm package `react-table-hoc-draggable-columns` does not have TypeScript types therefore it is being ignored 
* The console warnings are from inside the `react-table-hoc-draggable-columns` package. If time would allow, I would create the column draggable feature using `react-beautiful-dnd`
* I have not considered using Redux to keep it simple
* I haven't spend time on designing it as I am in the interview process with a few other companies and didn't have much time
