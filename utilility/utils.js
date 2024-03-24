/**
 * @summary To Find one Doc
 * @param - model, match, options
 * @returns All records from collection
 * @author Saurabh Udapure
 * @date 16/11/2023
 **/
// ****Utility - dynamic generic mongo query methods (can be used for any model)****
// FIND DOC
const findOneRecord = async (model, match, options) => {
  return await model.findOne(match, options);
};

// FIND ALL DOC
const findAllRecords = async (model, match, options) => {
  return await model.find(match, options);
};

// FIND ALL DOC Count
const findRecordsCount = async (model, match, options) => {
  return await model.find(match, options).count();
};

// UPDATE DOC
const findOneAndUpdateDoc = async (model, match, set, options) => {
  return await model.findOneAndUpdate(match, set, options);
};

//   Create document
const createDocument = async (model, data) => {
  return await model.create(data);
};

const saveDocument = async (model, data) => {
  const document = new model(data);
  return document.save();
};

module.exports = {
  createDocument,
  saveDocument,
  findOneRecord,
  findAllRecords,
  findRecordsCount,
  findOneAndUpdateDoc,
};
