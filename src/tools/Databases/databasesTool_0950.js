/**
 * Generated Tool: databasesTool_0950
 * Domain: Databases
 * ID: 0950
 */
exports.databasesTool_0950 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0950:', error);
    throw error;
  }
};
