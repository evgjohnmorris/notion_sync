/**
 * Generated Tool: databasesTool_0920
 * Domain: Databases
 * ID: 0920
 */
exports.databasesTool_0920 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0920:', error);
    throw error;
  }
};
