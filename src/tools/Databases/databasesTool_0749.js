/**
 * Generated Tool: databasesTool_0749
 * Domain: Databases
 * ID: 0749
 */
exports.databasesTool_0749 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0749:', error);
    throw error;
  }
};
