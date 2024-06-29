'use strict';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const retrieveDocuments = () => {
  const documents = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../constants/documents.json')),
  );

  return documents;
};

export const retrieveDocumentContent = (name) => {
  const content = fs.readFileSync(
    path.join(__dirname, `../documents/${name}.txt`),
    'utf8',
  );

  return content;
};
