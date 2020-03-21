const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

const foodList = [{foodId: "1234", name: 'banana', color: 'yellow', shape: 'crescent'},
    {foodId: "abcd", name: 'apple', color: "red/green", shape: 'round'}];

router.get('/', (req, res) => res.send(foodList));

router.post('/', (req, res) => {
    const body = req.body;
    const foodId = uuidv4();
    foodList.push({
        foodId: foodId,
        name: body.name,
        color: body.color,
        shape: body.shape,
    });
    res.status(200).send({message: 'Success!', foodId: foodId});
});

router.get('/:foodId', function (req, res) {
    const foodIdSearch = req.params.foodId;
    const foundFood = foodList.find(foodItem => foodItem.foodId === foodIdSearch);
    if (foundFood) {
        return res.send(foundFood)
    }

    res.status(404);
    res.send({error: 'No food found!'});
});

// Notice how we include the ID in the header
// Because we are saying that this is REQUIRED
// Same for delete
router.put('/:foodId', (req, res) => {
    const foodId = req.params.foodId;
    const foodBody = req.body;
    const foundFood = foodList.find((foodItem) => foodItem.foodId === foodId);
    if (!foundFood) {
        res.status(404);
        return res.send({error: 'Food not found!'});
    }

    foundFood.name = foodBody.name;
    foundFood.color = foodBody.color;
    foundFood.shape = foodBody.shape;

    res.status(200).send('Success!');
});

// DELETE requests can take a body, but we
// can typically handle the request with
// just the ID
router.delete('/:foodId', function (req, res) {
    const foodId = req.params.foodId;
    for (var i = foodList.length - 1; i >= 0; i--) {
        if (foodList[i].foodId === foodId) {
            foodList.splice(i, 1);
        }
    }
    // Note that DELETE requests are ALWAYS successful,
    // even if the resource is already delete
    res.status(200).send('Success!');
});

module.exports = router;