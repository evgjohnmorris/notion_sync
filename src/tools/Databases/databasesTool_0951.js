/**
 * Generated Tool: databasesTool_0951
 * Domain: Databases
 * ID: 0951
 */
exports.databasesTool_0951 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0951:', error);
    throw error;
  }
};
