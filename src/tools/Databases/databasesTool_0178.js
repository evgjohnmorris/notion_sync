/**
 * Generated Tool: databasesTool_0178
 * Domain: Databases
 * ID: 0178
 */
exports.databasesTool_0178 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0178:', error);
    throw error;
  }
};
