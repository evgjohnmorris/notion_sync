/**
 * Generated Tool: databasesTool_0273
 * Domain: Databases
 * ID: 0273
 */
exports.databasesTool_0273 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0273:', error);
    throw error;
  }
};
