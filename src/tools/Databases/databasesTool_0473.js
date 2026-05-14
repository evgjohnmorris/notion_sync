/**
 * Generated Tool: databasesTool_0473
 * Domain: Databases
 * ID: 0473
 */
exports.databasesTool_0473 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0473:', error);
    throw error;
  }
};
