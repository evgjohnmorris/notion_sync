/**
 * Generated Tool: databasesTool_0348
 * Domain: Databases
 * ID: 0348
 */
exports.databasesTool_0348 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0348:', error);
    throw error;
  }
};
