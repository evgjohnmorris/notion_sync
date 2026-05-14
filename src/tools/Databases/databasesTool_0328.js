/**
 * Generated Tool: databasesTool_0328
 * Domain: Databases
 * ID: 0328
 */
exports.databasesTool_0328 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0328:', error);
    throw error;
  }
};
