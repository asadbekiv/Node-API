const express = require('express');
const sampleProduct = require('../modules/productModule');

const postProducts = async (req, res) => {
  try {
    const product = await sampleProduct.create(req.body);
    res.status(200).json({
      message: 'successful',
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      status: 'fail',
    });
  }
};
const getProducts = async (req, res) => {
  try {
    const product = await sampleProduct.find({});
    res.status(200).json({
      status: 'successfull',
      data: product,
    });

    await product;
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

const delateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await sampleProduct.findByIdAndDelete(id);
    res.status(200).json({ message: 'Porduct DELATED,well done !' });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productWithId = await sampleProduct.findOne({ _id: id });
    res.status(200).json({
      status: 'success',
      data: productWithId,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productWithId = await sampleProduct.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      status: 'successfull',
      data: productWithId,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

module.exports = {
  postProducts,
  getProducts,
  delateProduct,
  getProduct,
  updateProduct,
};
