/**
 * Generated Tool: databasesTool_0383
 * Domain: Databases
 * ID: 0383
 */
exports.databasesTool_0383 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0383:', error);
    throw error;
  }
};
