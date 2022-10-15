const mongoose = require("mongoose");
const Product = require("../models/ProdSchema");

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


  module.exports.deleteProduct =  async function (req, res) {
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