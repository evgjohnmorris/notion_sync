/**
 * Generated Tool: databasesTool_0312
 * Domain: Databases
 * ID: 0312
 */
exports.databasesTool_0312 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0312:', error);
    throw error;
  }
};
