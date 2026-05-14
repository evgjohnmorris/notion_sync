/**
 * Generated Tool: databasesTool_0214
 * Domain: Databases
 * ID: 0214
 */
exports.databasesTool_0214 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0214:', error);
    throw error;
  }
};
