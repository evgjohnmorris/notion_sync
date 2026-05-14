/**
 * Generated Tool: databasesTool_0317
 * Domain: Databases
 * ID: 0317
 */
exports.databasesTool_0317 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0317:', error);
    throw error;
  }
};
