/**
 * Generated Tool: databasesTool_0018
 * Domain: Databases
 * ID: 0018
 */
exports.databasesTool_0018 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0018:', error);
    throw error;
  }
};
