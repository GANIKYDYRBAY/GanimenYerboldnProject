const productModel = require('../model/modelofProducts');

exports.create = async (req, res) => {
    if (!req.body.names && !req.body.costs && !req.body.imageSRC) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const product = new productModel({
        name: req.body.names,
        description: req.body.descriptions,
        price: req.body.costs,
        imageURL: req.body.imageSRC
    });

    await product.save().then(data => {
        res.send({
            message: "Product created successfully!!",
            product: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};1



exports.findAll = async (req, res) => {
    try {
        const products = await productModel.find();
        res.render('toys', {product: products})
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};



exports.findOne = async (req, res) => {
    try {
        const product = await productModel.findOne({name: req.query.names}).exec();
        res.status(200).json(product);

    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};




exports.update = async (req, res) => {
    if (!req.body.newNames && !req.body.newCosts && !req.body.newDescriptions) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const query = req.body.oldName;

    await productModel.findOneAndUpdate({name: query}, {
        name: req.body.newNames,
        description: req.body.newDescriptions,
        price: req.body.newCosts,
    }).then(data => {
        console.log(data)
        if (!data) {
            res.status(404).send({message: `User not found.`});
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};