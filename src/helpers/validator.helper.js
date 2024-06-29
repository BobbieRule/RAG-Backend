'use strict';

export const validateSchema = (schema, data) => {
  const result = schema.validate(data, {
    errors: { wrap: { label: false } },
  });

  if (result.error) {
    throw new Error(result.error.details[0].message);
  }

  return result.value;
};
