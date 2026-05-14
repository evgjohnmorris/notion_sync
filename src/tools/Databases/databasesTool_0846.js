/**
 * Generated Tool: databasesTool_0846
 * Domain: Databases
 * ID: 0846
 */
exports.databasesTool_0846 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0846:', error);
    throw error;
  }
};
