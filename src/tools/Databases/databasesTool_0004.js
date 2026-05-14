/**
 * Generated Tool: databasesTool_0004
 * Domain: Databases
 * ID: 0004
 */
exports.databasesTool_0004 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0004:', error);
    throw error;
  }
};
