/**
 * Generated Tool: databasesTool_0554
 * Domain: Databases
 * ID: 0554
 */
exports.databasesTool_0554 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0554:', error);
    throw error;
  }
};
