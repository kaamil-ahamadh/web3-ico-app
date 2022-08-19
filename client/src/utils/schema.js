import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required().min(3).label("Name"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(3)
    .required()
    .label("Email"),
  subject: Joi.string().min(3).required().label("Subject"),
  message: Joi.string().min(10).required().label("Message"),
});

export default schema;
