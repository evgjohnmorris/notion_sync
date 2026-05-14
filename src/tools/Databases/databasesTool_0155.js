/**
 * Generated Tool: databasesTool_0155
 * Domain: Databases
 * ID: 0155
 */
exports.databasesTool_0155 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0155:', error);
    throw error;
  }
};
