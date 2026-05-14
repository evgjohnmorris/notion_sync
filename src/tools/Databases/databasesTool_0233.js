/**
 * Generated Tool: databasesTool_0233
 * Domain: Databases
 * ID: 0233
 */
exports.databasesTool_0233 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0233:', error);
    throw error;
  }
};
