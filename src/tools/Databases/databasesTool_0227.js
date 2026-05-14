/**
 * Generated Tool: databasesTool_0227
 * Domain: Databases
 * ID: 0227
 */
exports.databasesTool_0227 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0227:', error);
    throw error;
  }
};
