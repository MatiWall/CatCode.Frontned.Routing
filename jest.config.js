// jest.config.js
module.exports = {
    preset: 'ts-jest', // Use ts-jest to transform TypeScript files
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts$': 'ts-jest', // Transform TypeScript files using ts-jest
    },
    moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'], // Recognize TypeScript and JavaScript files
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // If you use custom paths in tsconfig
    },
    extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ESModules
  };
  