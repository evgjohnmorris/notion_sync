/**
 * Generated Tool: databasesTool_0076
 * Domain: Databases
 * ID: 0076
 */
exports.databasesTool_0076 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0076:', error);
    throw error;
  }
};
