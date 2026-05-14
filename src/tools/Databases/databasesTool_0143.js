/**
 * Generated Tool: databasesTool_0143
 * Domain: Databases
 * ID: 0143
 */
exports.databasesTool_0143 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0143:', error);
    throw error;
  }
};
