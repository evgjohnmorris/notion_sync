/**
 * Generated Tool: databasesTool_0865
 * Domain: Databases
 * ID: 0865
 */
exports.databasesTool_0865 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0865:', error);
    throw error;
  }
};
