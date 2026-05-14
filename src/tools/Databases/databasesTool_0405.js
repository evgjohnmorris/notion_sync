/**
 * Generated Tool: databasesTool_0405
 * Domain: Databases
 * ID: 0405
 */
exports.databasesTool_0405 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0405:', error);
    throw error;
  }
};
