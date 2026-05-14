/**
 * Generated Tool: databasesTool_0360
 * Domain: Databases
 * ID: 0360
 */
exports.databasesTool_0360 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0360:', error);
    throw error;
  }
};
