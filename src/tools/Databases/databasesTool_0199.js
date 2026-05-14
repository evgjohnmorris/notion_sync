/**
 * Generated Tool: databasesTool_0199
 * Domain: Databases
 * ID: 0199
 */
exports.databasesTool_0199 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0199:', error);
    throw error;
  }
};
