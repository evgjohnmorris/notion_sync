/**
 * Generated Tool: databasesTool_0165
 * Domain: Databases
 * ID: 0165
 */
exports.databasesTool_0165 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0165:', error);
    throw error;
  }
};
