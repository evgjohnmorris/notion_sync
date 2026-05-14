/**
 * Generated Tool: databasesTool_0113
 * Domain: Databases
 * ID: 0113
 */
exports.databasesTool_0113 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0113:', error);
    throw error;
  }
};
