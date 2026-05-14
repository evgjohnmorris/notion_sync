/**
 * Generated Tool: databasesTool_0192
 * Domain: Databases
 * ID: 0192
 */
exports.databasesTool_0192 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0192:', error);
    throw error;
  }
};
