/**
 * Generated Tool: databasesTool_0496
 * Domain: Databases
 * ID: 0496
 */
exports.databasesTool_0496 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0496:', error);
    throw error;
  }
};
