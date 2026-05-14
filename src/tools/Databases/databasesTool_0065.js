/**
 * Generated Tool: databasesTool_0065
 * Domain: Databases
 * ID: 0065
 */
exports.databasesTool_0065 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0065:', error);
    throw error;
  }
};
