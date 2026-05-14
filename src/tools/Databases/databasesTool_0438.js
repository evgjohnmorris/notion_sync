/**
 * Generated Tool: databasesTool_0438
 * Domain: Databases
 * ID: 0438
 */
exports.databasesTool_0438 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0438:', error);
    throw error;
  }
};
