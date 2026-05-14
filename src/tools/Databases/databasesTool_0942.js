/**
 * Generated Tool: databasesTool_0942
 * Domain: Databases
 * ID: 0942
 */
exports.databasesTool_0942 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0942:', error);
    throw error;
  }
};
