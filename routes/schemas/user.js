const joi = require("joi");
const { genders } = require("../../helpers/constants");

const addWaterIntakeSchema = joi.object({
  waterIntake: joi.number().required().max(7000).positive(),
});

const addFoodIntakeSchema = joi.object({
  carbohidrates: joi.number().required(),
  protein: joi.number().required(),
  fat: joi.number().required(),
  dish: joi.string().required(),
  type: joi.string().valid("breakfast", "lunch", "dinner", "snack"),
  calories: joi.number().required(),
});

const updateFoodIntakeSchema = joi.object({
  carbohidrates: joi.number().required(),
  protein: joi.number().required(),
  fat: joi.number().required(),
  dish: joi.string().required(),
  type: joi.string().valid("breakfast", "lunch", "dinner", "snack"),
  calories: joi.number().required(),
});

const resetFoodIntakeSchema = joi.object({
  type: joi.string().valid("breakfast", "lunch", "dinner", "snack"),
});

const schemas = {
  addWaterIntakeSchema,
  addFoodIntakeSchema,
  updateFoodIntakeSchema,
  resetFoodIntakeSchema,
};

const updateSchema = joi.object({
  name: joi.string().required(),
  gender: joi
    .string()
    .valid(...genders)
    .required(),
  age: joi.number().required(),
  height: joi.number().required(),
  weight: joi.number().required(),
  activity: joi.number().valid(1.2, 1.375, 1.55, 1.725, 1.9).required(),
});

module.exports = {
  schemas,
  updateSchema,
};
