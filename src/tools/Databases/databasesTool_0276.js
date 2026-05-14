/**
 * Generated Tool: databasesTool_0276
 * Domain: Databases
 * ID: 0276
 */
exports.databasesTool_0276 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0276:', error);
    throw error;
  }
};
