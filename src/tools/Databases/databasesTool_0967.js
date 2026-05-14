/**
 * Generated Tool: databasesTool_0967
 * Domain: Databases
 * ID: 0967
 */
exports.databasesTool_0967 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0967:', error);
    throw error;
  }
};
