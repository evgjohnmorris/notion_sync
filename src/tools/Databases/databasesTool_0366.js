/**
 * Generated Tool: databasesTool_0366
 * Domain: Databases
 * ID: 0366
 */
exports.databasesTool_0366 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0366:', error);
    throw error;
  }
};
