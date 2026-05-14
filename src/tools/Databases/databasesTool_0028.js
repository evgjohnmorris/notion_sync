/**
 * Generated Tool: databasesTool_0028
 * Domain: Databases
 * ID: 0028
 */
exports.databasesTool_0028 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0028:', error);
    throw error;
  }
};
