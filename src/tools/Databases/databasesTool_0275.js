/**
 * Generated Tool: databasesTool_0275
 * Domain: Databases
 * ID: 0275
 */
exports.databasesTool_0275 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0275:', error);
    throw error;
  }
};
