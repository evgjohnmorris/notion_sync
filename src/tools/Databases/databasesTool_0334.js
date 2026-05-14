/**
 * Generated Tool: databasesTool_0334
 * Domain: Databases
 * ID: 0334
 */
exports.databasesTool_0334 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0334:', error);
    throw error;
  }
};
