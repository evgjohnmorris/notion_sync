/**
 * Generated Tool: databasesTool_0746
 * Domain: Databases
 * ID: 0746
 */
exports.databasesTool_0746 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0746:', error);
    throw error;
  }
};
