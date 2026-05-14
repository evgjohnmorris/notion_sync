/**
 * Generated Tool: databasesTool_0033
 * Domain: Databases
 * ID: 0033
 */
exports.databasesTool_0033 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0033:', error);
    throw error;
  }
};
