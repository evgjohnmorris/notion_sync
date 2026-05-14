/**
 * Generated Tool: databasesTool_0959
 * Domain: Databases
 * ID: 0959
 */
exports.databasesTool_0959 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0959:', error);
    throw error;
  }
};
