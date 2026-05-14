/**
 * Generated Tool: databasesTool_0456
 * Domain: Databases
 * ID: 0456
 */
exports.databasesTool_0456 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0456:', error);
    throw error;
  }
};
