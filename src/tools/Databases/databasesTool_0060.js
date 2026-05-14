/**
 * Generated Tool: databasesTool_0060
 * Domain: Databases
 * ID: 0060
 */
exports.databasesTool_0060 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0060:', error);
    throw error;
  }
};
