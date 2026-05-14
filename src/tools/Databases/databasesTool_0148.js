/**
 * Generated Tool: databasesTool_0148
 * Domain: Databases
 * ID: 0148
 */
exports.databasesTool_0148 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0148:', error);
    throw error;
  }
};
