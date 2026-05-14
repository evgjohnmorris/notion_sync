/**
 * Generated Tool: databasesTool_0730
 * Domain: Databases
 * ID: 0730
 */
exports.databasesTool_0730 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0730:', error);
    throw error;
  }
};
