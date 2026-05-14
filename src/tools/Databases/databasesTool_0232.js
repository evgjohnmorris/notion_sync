/**
 * Generated Tool: databasesTool_0232
 * Domain: Databases
 * ID: 0232
 */
exports.databasesTool_0232 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0232:', error);
    throw error;
  }
};
