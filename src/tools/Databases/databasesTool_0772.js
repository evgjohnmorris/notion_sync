/**
 * Generated Tool: databasesTool_0772
 * Domain: Databases
 * ID: 0772
 */
exports.databasesTool_0772 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0772:', error);
    throw error;
  }
};
