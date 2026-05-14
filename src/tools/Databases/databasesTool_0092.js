/**
 * Generated Tool: databasesTool_0092
 * Domain: Databases
 * ID: 0092
 */
exports.databasesTool_0092 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0092:', error);
    throw error;
  }
};
