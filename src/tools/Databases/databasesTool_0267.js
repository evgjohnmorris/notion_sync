/**
 * Generated Tool: databasesTool_0267
 * Domain: Databases
 * ID: 0267
 */
exports.databasesTool_0267 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0267:', error);
    throw error;
  }
};
