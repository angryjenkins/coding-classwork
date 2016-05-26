  * Start mongo and switch to a new db named `zoo`
  * Insert into a collection named `animals`:
    * One entry for  each of your five favorite animals.
    * Each entry should have a field of `numlegs` with the an integer of the number of legs that animal has, a field of `class` with that animal's class (mammal, reptile, etc), a field of `avgWeight` with an integer of the average weight of the animal in pounds (if its a range, just pick a single number, we'll be using this later), a field of `name`, with the animal's name, and a field of `whatIWouldReallyCallIt` with the name of what you would call the animal if you got to name it.

    Example:
    ```
    {
      "name":"Panda",
      "numlegs":4,
      "class":"mammal",
      "weight": 254,
      "whatIWouldReallyCallIt":"Captain Fuzzy Face"
    }
    ```


    # MONGO SORT:::

    db.animals.aggregate({$sort: {"numlegs":-1}}).pretty()