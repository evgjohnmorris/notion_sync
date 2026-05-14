/**
 * Generated Tool: databasesTool_0698
 * Domain: Databases
 * ID: 0698
 */
exports.databasesTool_0698 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0698:', error);
    throw error;
  }
};
