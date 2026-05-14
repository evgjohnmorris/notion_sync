/**
 * Generated Tool: databasesTool_0126
 * Domain: Databases
 * ID: 0126
 */
exports.databasesTool_0126 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0126:', error);
    throw error;
  }
};
