/**
 * Generated Tool: databasesTool_0850
 * Domain: Databases
 * ID: 0850
 */
exports.databasesTool_0850 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0850:', error);
    throw error;
  }
};
