/**
 * Generated Tool: databasesTool_0994
 * Domain: Databases
 * ID: 0994
 */
exports.databasesTool_0994 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0994:', error);
    throw error;
  }
};
