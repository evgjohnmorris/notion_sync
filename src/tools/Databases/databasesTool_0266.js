/**
 * Generated Tool: databasesTool_0266
 * Domain: Databases
 * ID: 0266
 */
exports.databasesTool_0266 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0266:', error);
    throw error;
  }
};
