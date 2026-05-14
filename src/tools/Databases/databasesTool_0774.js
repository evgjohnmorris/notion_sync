/**
 * Generated Tool: databasesTool_0774
 * Domain: Databases
 * ID: 0774
 */
exports.databasesTool_0774 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0774:', error);
    throw error;
  }
};
