/**
 * Generated Tool: databasesTool_0015
 * Domain: Databases
 * ID: 0015
 */
exports.databasesTool_0015 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0015:', error);
    throw error;
  }
};
