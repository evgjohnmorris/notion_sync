/**
 * Generated Tool: databasesTool_0602
 * Domain: Databases
 * ID: 0602
 */
exports.databasesTool_0602 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0602:', error);
    throw error;
  }
};
