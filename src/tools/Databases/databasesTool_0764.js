/**
 * Generated Tool: databasesTool_0764
 * Domain: Databases
 * ID: 0764
 */
exports.databasesTool_0764 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0764:', error);
    throw error;
  }
};
