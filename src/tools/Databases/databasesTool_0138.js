/**
 * Generated Tool: databasesTool_0138
 * Domain: Databases
 * ID: 0138
 */
exports.databasesTool_0138 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0138:', error);
    throw error;
  }
};
