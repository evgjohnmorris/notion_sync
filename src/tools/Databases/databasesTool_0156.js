/**
 * Generated Tool: databasesTool_0156
 * Domain: Databases
 * ID: 0156
 */
exports.databasesTool_0156 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0156:', error);
    throw error;
  }
};
