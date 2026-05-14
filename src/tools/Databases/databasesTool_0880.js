/**
 * Generated Tool: databasesTool_0880
 * Domain: Databases
 * ID: 0880
 */
exports.databasesTool_0880 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0880:', error);
    throw error;
  }
};
