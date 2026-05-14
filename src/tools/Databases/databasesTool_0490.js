/**
 * Generated Tool: databasesTool_0490
 * Domain: Databases
 * ID: 0490
 */
exports.databasesTool_0490 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0490:', error);
    throw error;
  }
};
