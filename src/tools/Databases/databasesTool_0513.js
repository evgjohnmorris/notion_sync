/**
 * Generated Tool: databasesTool_0513
 * Domain: Databases
 * ID: 0513
 */
exports.databasesTool_0513 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0513:', error);
    throw error;
  }
};
