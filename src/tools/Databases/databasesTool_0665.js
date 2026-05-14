/**
 * Generated Tool: databasesTool_0665
 * Domain: Databases
 * ID: 0665
 */
exports.databasesTool_0665 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0665:', error);
    throw error;
  }
};
