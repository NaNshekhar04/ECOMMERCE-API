const mongoose = require("mongoose");
const Product = require("../models/ProdSchema");

// CONTROLLER ACTION FOR CREATING PRODUCT INTO DB 

module.exports.createProduct = async function (req, res) {
  try {
    let product = await Product.create(req.body);

    if (product) {
      return res.json({
        product,
        data: {
          message: "Product added successfully",
        },
      });
    } else {
      return res.status(500).json({
        data: {
          message: "Internal Server Erron",
        },
      });
    }
  } catch (err) {
    console.log("Error while creating product", err);
    return;
  }
};


// CONTROLLER ACTION FOR GETTING AND DISPLAYING EACH PRODUCT FROM OUR DB 


module.exports.eachProducts = async function (req, res) {
  try {
    let products = await Product.find({});

    if (products) {
      return res.json({
        products,
        data: {
          message: "All products here",
        },
      });
    } else {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  } catch (err) {
    console.log("Error while viewing all products", err);
    return;
  }
};

// CONTROLLER ACTION FOR DELETING PRODUCT WITH SPECIFIC ID FROM OUR DB 

module.exports.deleteProduct = async function (req, res) {
  try {
    let id = req.params.id;

    let product = await Product.findById(id);
    if (product) {
      await Product.findByIdAndDelete(id);

      return res.status(200).json({
        data: {
          message: "Product deleted ",
        },
      });
    } else {
      return res.status(404).json({
        data: {
          message: "Product not found",
        },
      });
    }
  } catch (err) {
    console.log("Error while deleteing product", err);
    return;
  }
};

// CONTROLLER ACTION FOR UPDATING PRODUCT WITH A SPECIFIC PRODUCT INTO DB 

module.exports.updateProduct = async function (req, res) {
  try {
    let id = req.params.id;
    let num = parseInt(req.params.num);

    let product = await Product.findById(id);

    if (product) {
      let q = product.quantity;
      let result = q + num;

      if (result < 0) {
        return res.json({
          data: {
            message:
              "You can not decrease quantity because you have less number of product quantity",
          },
        });
      } else if (result >= 0) {
        product.quantity += num;
        await product.save();
        return res.status(200).json({
          product,
          data: {
            message: "Product updated successfully",
          },
        });
      }
    } else {
      return res.status(400).json({
        data: {
          message: "Product not found",
        },
      });
    }
  } catch (err) {
    console.log("error while updating product quantity", err);
    return;
  }
};