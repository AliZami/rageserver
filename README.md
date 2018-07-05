# rageserver
Open source rage mp role play server

Hello!
All about this server you can read at:
https://rage.mp/forums/topic/1559-open-source-role-play-server/




# Installation guide:
1. Put all files in your project.
2. Run `npm i` by cmd in main directory with "server.exe" excutable script.
3. Server using MySQL as a database. So you have to import sql file in to your database. In database management make one like "ragerp".
   Import sql structure file (rpserver.sql) into it.
4. Go into `app/server/` and create a file with name `sMysql.js`, paste this code into it and edit your settings:
```
"use strict"

const mysql = require("mysql");
const connection =  mysql.createPool({
	host			:	"localhost",
	user			: 	"root",
	password		: 	"",
	database		:	"rpserver",
});

connection.getConnection(function(e) {
	if (e) 	{
		log.error("DATABASE IS NOT WORKING");
		throw e;
	}
	else 	{
		log.debug(`DATABASE IS WORKING`);
	}
});

module.exports = connection;
```
5. Modify files in `app` directory (if you want).
6. Do `npm run build` by cmd in main directory (Do this every time after some improvements in 'app' directory).
7. Start a server

THEN ENJOY.
