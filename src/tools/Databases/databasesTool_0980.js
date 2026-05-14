/**
 * Generated Tool: databasesTool_0980
 * Domain: Databases
 * ID: 0980
 */
exports.databasesTool_0980 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0980:', error);
    throw error;
  }
};
