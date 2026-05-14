/**
 * Generated Tool: databasesTool_0358
 * Domain: Databases
 * ID: 0358
 */
exports.databasesTool_0358 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0358:', error);
    throw error;
  }
};
