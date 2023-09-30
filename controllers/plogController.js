const Plog = require("../models/plogSchema");
const asyncHandler = require("express-async-handler");
exports.createPlog = asyncHandler(async (req, res, next) => {
  const { Title, Author, Content, ReadTime } = req.body;
  const plog = await Plog.create({ Title, Author, Content, ReadTime });

  res.status(200).json(plog);
});

exports.getAllPlogs = asyncHandler(async (req, res, next) => {
  const plogs = await Plog.find();
  res.status(200).json({
    results: plogs.length,
    plogs,
  });
});

exports.getPlog = asyncHandler(async (req, res, next) => {
  const plog = await Plog.findById(req.params.id);
  res.status(200).json({
    plog,
  });
});

exports.updatePlog = asyncHandler(async (req, res, next) => {
  const { Title, Author, Content, ReadTime } = req.body;

  const updateFields = {
    Title,
    Author,
    Content,
    ReadTime,
    LastModifiedDate: Date.now(),
  };

  // Use findByIdAndUpdate to update the Plog document
  const plog = await Plog.findByIdAndUpdate(req.params.id, updateFields, {
    new: true,
  });

  res.status(200).json({
    plog,
  });
});

exports.deletePlog = asyncHandler(async (req, res, next) => {
  await Plog.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "plog deleted successfully",
  });
});
