/**
 * Generated Tool: databasesTool_0257
 * Domain: Databases
 * ID: 0257
 */
exports.databasesTool_0257 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0257:', error);
    throw error;
  }
};
