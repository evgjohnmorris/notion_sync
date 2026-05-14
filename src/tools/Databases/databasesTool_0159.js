/**
 * Generated Tool: databasesTool_0159
 * Domain: Databases
 * ID: 0159
 */
exports.databasesTool_0159 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0159:', error);
    throw error;
  }
};
