/**
 * Generated Tool: databasesTool_0215
 * Domain: Databases
 * ID: 0215
 */
exports.databasesTool_0215 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0215:', error);
    throw error;
  }
};
