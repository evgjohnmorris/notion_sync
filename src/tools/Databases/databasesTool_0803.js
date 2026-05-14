/**
 * Generated Tool: databasesTool_0803
 * Domain: Databases
 * ID: 0803
 */
exports.databasesTool_0803 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0803:', error);
    throw error;
  }
};
