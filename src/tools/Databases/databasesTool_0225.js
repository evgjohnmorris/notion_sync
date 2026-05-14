/**
 * Generated Tool: databasesTool_0225
 * Domain: Databases
 * ID: 0225
 */
exports.databasesTool_0225 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0225:', error);
    throw error;
  }
};
