/**
 * Generated Tool: databasesTool_0769
 * Domain: Databases
 * ID: 0769
 */
exports.databasesTool_0769 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0769:', error);
    throw error;
  }
};
