/**
 * Generated Tool: databasesTool_0282
 * Domain: Databases
 * ID: 0282
 */
exports.databasesTool_0282 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0282:', error);
    throw error;
  }
};
