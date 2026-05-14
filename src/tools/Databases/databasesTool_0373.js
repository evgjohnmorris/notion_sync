/**
 * Generated Tool: databasesTool_0373
 * Domain: Databases
 * ID: 0373
 */
exports.databasesTool_0373 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0373:', error);
    throw error;
  }
};
