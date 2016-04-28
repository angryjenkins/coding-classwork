Exercise: 
* Given the following data below, create a MySQL databse with a table populating with the given data.


  |id| name  | coolness_points  | attitude |
  |--|-------| ---------- |------|
  |1 |"Jerry"|75|"Relaxed"|
  |2 |"Elaine"|65|"Righteous"|
  |3 |"Kramer"|5|"Doofus"|
  |4 |"George"|25|"Selfish"|


* Create a Node App with Express and MySQL npm.
* Create 3 Express routes:
  * Create a '/cast' route that will display all the names from the table order by `id`
  * Create a '/coolness-chart' route that will display all cast members and their coolness_points in the order from top to bottom
  * Create a '/attitude-chart/:type' route that will display the name from the table if the param matches attitude to on any row in the table 