/**
 * Generated Tool: databasesTool_0984
 * Domain: Databases
 * ID: 0984
 */
exports.databasesTool_0984 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0984:', error);
    throw error;
  }
};
