const express = require('express');
const router = express.Router();

const foodList = [{name: 'banana', color: 'yellow', shape: 'crescent'},
    {name: 'apple', color: 'red/green', shape: 'round'}];

router.get('/', (req, res) => res.send(foodList));

router.post('/', (req, res) => {
    const body = req.body;
    foodList.push({
        name: body.name,
        color: body.color,
        shape: body.shape,
    });
    res.status(200).send({message: 'Success!', foodId: foodId});
});

router.get('/:foodName', function (req, res) {
    const name = req.params.name;
    const foundFood = foodList.find(foodItem => foodItem.foodName === name);
    if (foundFood) {
        return res.send(foundFood)
    }

    res.status(404);
    res.send({error: 'No food found!'});
});

module.exports = router;