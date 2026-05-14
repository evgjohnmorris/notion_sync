/**
 * Generated Tool: databasesTool_0116
 * Domain: Databases
 * ID: 0116
 */
exports.databasesTool_0116 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0116:', error);
    throw error;
  }
};
