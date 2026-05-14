/**
 * Generated Tool: databasesTool_0310
 * Domain: Databases
 * ID: 0310
 */
exports.databasesTool_0310 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0310:', error);
    throw error;
  }
};
