/**
 * Generated Tool: databasesTool_0002
 * Domain: Databases
 * ID: 0002
 */
exports.databasesTool_0002 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0002:', error);
    throw error;
  }
};
