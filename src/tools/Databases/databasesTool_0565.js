/**
 * Generated Tool: databasesTool_0565
 * Domain: Databases
 * ID: 0565
 */
exports.databasesTool_0565 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0565:', error);
    throw error;
  }
};
