/**
 * Generated Tool: databasesTool_0323
 * Domain: Databases
 * ID: 0323
 */
exports.databasesTool_0323 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0323:', error);
    throw error;
  }
};
