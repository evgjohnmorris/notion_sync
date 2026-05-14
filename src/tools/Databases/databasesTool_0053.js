/**
 * Generated Tool: databasesTool_0053
 * Domain: Databases
 * ID: 0053
 */
exports.databasesTool_0053 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0053:', error);
    throw error;
  }
};
