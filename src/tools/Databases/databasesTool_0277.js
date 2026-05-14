/**
 * Generated Tool: databasesTool_0277
 * Domain: Databases
 * ID: 0277
 */
exports.databasesTool_0277 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0277:', error);
    throw error;
  }
};
