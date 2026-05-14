/**
 * Generated Tool: databasesTool_0432
 * Domain: Databases
 * ID: 0432
 */
exports.databasesTool_0432 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0432:', error);
    throw error;
  }
};
