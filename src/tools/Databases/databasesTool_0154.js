/**
 * Generated Tool: databasesTool_0154
 * Domain: Databases
 * ID: 0154
 */
exports.databasesTool_0154 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0154:', error);
    throw error;
  }
};
