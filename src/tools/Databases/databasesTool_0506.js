/**
 * Generated Tool: databasesTool_0506
 * Domain: Databases
 * ID: 0506
 */
exports.databasesTool_0506 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0506:', error);
    throw error;
  }
};
