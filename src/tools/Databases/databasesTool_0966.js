/**
 * Generated Tool: databasesTool_0966
 * Domain: Databases
 * ID: 0966
 */
exports.databasesTool_0966 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0966:', error);
    throw error;
  }
};
