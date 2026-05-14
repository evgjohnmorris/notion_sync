/**
 * Generated Tool: databasesTool_0870
 * Domain: Databases
 * ID: 0870
 */
exports.databasesTool_0870 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0870:', error);
    throw error;
  }
};
