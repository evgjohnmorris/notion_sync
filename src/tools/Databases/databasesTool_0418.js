/**
 * Generated Tool: databasesTool_0418
 * Domain: Databases
 * ID: 0418
 */
exports.databasesTool_0418 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0418:', error);
    throw error;
  }
};
