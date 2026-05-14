/**
 * Generated Tool: databasesTool_0047
 * Domain: Databases
 * ID: 0047
 */
exports.databasesTool_0047 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0047:', error);
    throw error;
  }
};
