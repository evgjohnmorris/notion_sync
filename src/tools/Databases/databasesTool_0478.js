/**
 * Generated Tool: databasesTool_0478
 * Domain: Databases
 * ID: 0478
 */
exports.databasesTool_0478 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0478:', error);
    throw error;
  }
};
