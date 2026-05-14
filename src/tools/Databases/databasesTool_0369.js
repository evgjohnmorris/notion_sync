/**
 * Generated Tool: databasesTool_0369
 * Domain: Databases
 * ID: 0369
 */
exports.databasesTool_0369 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0369:', error);
    throw error;
  }
};
