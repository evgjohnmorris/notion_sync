/**
 * Generated Tool: databasesTool_0027
 * Domain: Databases
 * ID: 0027
 */
exports.databasesTool_0027 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0027:', error);
    throw error;
  }
};
