/**
 * Generated Tool: databasesTool_0397
 * Domain: Databases
 * ID: 0397
 */
exports.databasesTool_0397 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0397:', error);
    throw error;
  }
};
