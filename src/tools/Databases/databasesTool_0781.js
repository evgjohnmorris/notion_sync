/**
 * Generated Tool: databasesTool_0781
 * Domain: Databases
 * ID: 0781
 */
exports.databasesTool_0781 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0781:', error);
    throw error;
  }
};
