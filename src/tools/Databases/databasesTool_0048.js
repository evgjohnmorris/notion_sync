/**
 * Generated Tool: databasesTool_0048
 * Domain: Databases
 * ID: 0048
 */
exports.databasesTool_0048 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0048:', error);
    throw error;
  }
};
