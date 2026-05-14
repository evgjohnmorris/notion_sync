/**
 * Generated Tool: databasesTool_0659
 * Domain: Databases
 * ID: 0659
 */
exports.databasesTool_0659 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0659:', error);
    throw error;
  }
};
