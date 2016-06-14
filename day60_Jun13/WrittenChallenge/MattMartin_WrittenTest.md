1. 
If we are still speacking in Sequelize terms, I would make a database and within it create a table called users.

mysql -u root -p ......
create database Project;
use Project;

create table Users;

Then I would make a controller in which I could route a query of all Users. 

Users.findAll({});


2. 
Here, in the same Users controller, I will make a route to query a specific ID. Using body-parser I will target the second row by ID.

Users.findAll({
  id: req.body.id[1]
});

3.
To make this meals table, I would create a Sequelize model for Meals. I would assicate it by foreign key to tue User.

4.

module.exports = function(sequelize, DataTypes) {
  var Meal = sequelize.define("Meal", {
    meal: DataTypes.STRING
  }, {
    underscored: true,

   
    freezeTableName: true,

    tableName: 'meals',

    classMethods: {
      associate: function(models) {
        Meal.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Meal;
};

5.
Inserting a meal into a User withh ID 1. It will then redirect home.

router.post('/:person_id/tasks/create', function (req, res) {
  models.Meal.create({
    meal: req.body.meal,
    id: req.params.id
  }).then(function() {
    res.redirect('/');
  });
});



6.

in MySQL prompt:

SQL> UPDATE Users SET NAME = “shamoontastic” WHERE ID = 3;

7.

SQL> DELETE FROM Usere WHERE id = 4;

8.



9.--------------------
margin
________________
padding
-------------
content

10.








11. Sphen Zhen



12.
how about a shell script? killall -lions ?