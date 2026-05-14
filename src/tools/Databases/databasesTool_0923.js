/**
 * Generated Tool: databasesTool_0923
 * Domain: Databases
 * ID: 0923
 */
exports.databasesTool_0923 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0923:', error);
    throw error;
  }
};
