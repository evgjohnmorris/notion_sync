/**
 * Generated Tool: databasesTool_0622
 * Domain: Databases
 * ID: 0622
 */
exports.databasesTool_0622 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0622:', error);
    throw error;
  }
};
