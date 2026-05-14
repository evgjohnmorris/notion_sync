/**
 * Generated Tool: databasesTool_0972
 * Domain: Databases
 * ID: 0972
 */
exports.databasesTool_0972 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0972:', error);
    throw error;
  }
};
