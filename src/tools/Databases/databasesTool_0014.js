/**
 * Generated Tool: databasesTool_0014
 * Domain: Databases
 * ID: 0014
 */
exports.databasesTool_0014 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0014:', error);
    throw error;
  }
};
