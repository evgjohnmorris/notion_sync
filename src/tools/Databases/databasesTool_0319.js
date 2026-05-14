/**
 * Generated Tool: databasesTool_0319
 * Domain: Databases
 * ID: 0319
 */
exports.databasesTool_0319 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0319:', error);
    throw error;
  }
};
