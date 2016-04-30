Create a holiday party planner app. Many different kinds of holidays are celebrated around the world, we want to help create parties for our clients and also keep track of all the events we host. In MySQL create a database called 'holiday_party_db' create two tables structured like the tables below.

+ clients table
|id|client name|
|--|------|
|1|Jonny|
|2|Bobby|

+ parties table
|id|party name|party type|party cost|client id|
|--|----------|------------|----------|---------|
|1|Jonnys New Years Party|New Years|600|1|
|2|Jonnys Chinese New Years Party|New Years|500|1|
|3|Bobbys Baby Shower Party|Baby Shower|200|2|
|4|Bobbys Cousin Birthday Party|Birthday Party|300|2|
|5|Bobbys Superbowl Party|Superbowl Party|250|2|

+ Create an Node MySQL app with an O.R.M functions that executes once the server is launched.


* No Express, No handlebars, display with console log    * Create a MySQL database with the tables and data given to you
    * Create a Node app and connect it to MySQL with a 'config' dir and with a 'connection.js' file inside of that dir
    * Create a 'orm.js' file and make an O.R.M. that will
        * Find all parties order by party cost
        * Find parties by the party name
        * Find the client with the most parties
        * Bonus create a function in the O.R.M that will let the user add more clients and parties.