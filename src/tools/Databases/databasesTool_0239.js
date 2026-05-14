/**
 * Generated Tool: databasesTool_0239
 * Domain: Databases
 * ID: 0239
 */
exports.databasesTool_0239 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0239:', error);
    throw error;
  }
};
