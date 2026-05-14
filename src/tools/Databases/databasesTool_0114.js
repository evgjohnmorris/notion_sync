/**
 * Generated Tool: databasesTool_0114
 * Domain: Databases
 * ID: 0114
 */
exports.databasesTool_0114 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0114:', error);
    throw error;
  }
};
