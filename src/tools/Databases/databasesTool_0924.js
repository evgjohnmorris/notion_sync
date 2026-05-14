/**
 * Generated Tool: databasesTool_0924
 * Domain: Databases
 * ID: 0924
 */
exports.databasesTool_0924 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0924:', error);
    throw error;
  }
};
