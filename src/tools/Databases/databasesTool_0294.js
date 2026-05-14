/**
 * Generated Tool: databasesTool_0294
 * Domain: Databases
 * ID: 0294
 */
exports.databasesTool_0294 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0294:', error);
    throw error;
  }
};
