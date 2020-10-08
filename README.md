# chatApp
a simple chat app with spring BE and react FE

clone repo
run docker-compose up --build
go to localhost:3000
(a loading spinner will appear while the websocket connection is being established)


if there are problems with docker-compose:
- go to app-server folder
- run java -jar target/target/chat-0.0.1-SNAPSHOT.jar
- go to app-client folder
- run npm install
- run npm start
(a browser window in localhost:3000 should have open)
