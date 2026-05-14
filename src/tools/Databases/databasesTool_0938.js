/**
 * Generated Tool: databasesTool_0938
 * Domain: Databases
 * ID: 0938
 */
exports.databasesTool_0938 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0938:', error);
    throw error;
  }
};
