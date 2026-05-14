/**
 * Generated Tool: databasesTool_0010
 * Domain: Databases
 * ID: 0010
 */
exports.databasesTool_0010 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0010:', error);
    throw error;
  }
};
