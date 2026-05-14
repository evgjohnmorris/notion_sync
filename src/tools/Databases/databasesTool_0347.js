/**
 * Generated Tool: databasesTool_0347
 * Domain: Databases
 * ID: 0347
 */
exports.databasesTool_0347 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0347:', error);
    throw error;
  }
};
