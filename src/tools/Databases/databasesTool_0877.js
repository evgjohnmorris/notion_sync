/**
 * Generated Tool: databasesTool_0877
 * Domain: Databases
 * ID: 0877
 */
exports.databasesTool_0877 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0877:', error);
    throw error;
  }
};
