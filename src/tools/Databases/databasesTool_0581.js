/**
 * Generated Tool: databasesTool_0581
 * Domain: Databases
 * ID: 0581
 */
exports.databasesTool_0581 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0581:', error);
    throw error;
  }
};
