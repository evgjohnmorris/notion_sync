/**
 * Generated Tool: databasesTool_0866
 * Domain: Databases
 * ID: 0866
 */
exports.databasesTool_0866 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0866:', error);
    throw error;
  }
};
