/**
 * Generated Tool: databasesTool_0610
 * Domain: Databases
 * ID: 0610
 */
exports.databasesTool_0610 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0610:', error);
    throw error;
  }
};
