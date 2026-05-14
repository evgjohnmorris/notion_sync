/**
 * Generated Tool: databasesTool_0969
 * Domain: Databases
 * ID: 0969
 */
exports.databasesTool_0969 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0969:', error);
    throw error;
  }
};
