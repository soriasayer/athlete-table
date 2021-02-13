# Instructions for checking the project

## Run it locally
Execute the following commands on your terminal
```
git clone https://github.com/soriasayer/athlete-table
cd athlete-table
npm i
npm start
```

## Check it online
You can access a deployed version from [this link](athlete-table.surge.sh)

# Notes: 
* The base URL can be moved to .env file
* The npm package `react-table-hoc-draggable-columns` does not have TypeScript types therefore it is being ignored 
* The console warnings are from inside the `react-table-hoc-draggable-columns` package. If time would allow, I would create the column draggable feature using `react-beautiful-dnd`
* I have not considered using Redux to keep it simple
* I haven't spend time on designing it as I am in the interview process with a few other companies and didn't have much time
