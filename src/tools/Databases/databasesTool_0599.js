/**
 * Generated Tool: databasesTool_0599
 * Domain: Databases
 * ID: 0599
 */
exports.databasesTool_0599 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0599:', error);
    throw error;
  }
};
