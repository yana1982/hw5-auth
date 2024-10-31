import { setupServer } from './server.js';
import { initMongoDB } from './db/initMongoConnection.js';
// import { startServer } from './server.js';
// import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
// import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';

const bootstrap = async () => {
  await initMongoDB();
  setupServer();
};

bootstrap();
