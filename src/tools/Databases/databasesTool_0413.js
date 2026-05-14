/**
 * Generated Tool: databasesTool_0413
 * Domain: Databases
 * ID: 0413
 */
exports.databasesTool_0413 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0413:', error);
    throw error;
  }
};
