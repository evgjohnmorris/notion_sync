/**
 * Generated Tool: databasesTool_0414
 * Domain: Databases
 * ID: 0414
 */
exports.databasesTool_0414 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0414:', error);
    throw error;
  }
};
