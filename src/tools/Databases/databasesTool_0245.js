/**
 * Generated Tool: databasesTool_0245
 * Domain: Databases
 * ID: 0245
 */
exports.databasesTool_0245 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0245:', error);
    throw error;
  }
};
