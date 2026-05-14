/**
 * Generated Tool: databasesTool_0452
 * Domain: Databases
 * ID: 0452
 */
exports.databasesTool_0452 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0452:', error);
    throw error;
  }
};
