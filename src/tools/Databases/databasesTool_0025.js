/**
 * Generated Tool: databasesTool_0025
 * Domain: Databases
 * ID: 0025
 */
exports.databasesTool_0025 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0025:', error);
    throw error;
  }
};
