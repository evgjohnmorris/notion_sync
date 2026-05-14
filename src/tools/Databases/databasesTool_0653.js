/**
 * Generated Tool: databasesTool_0653
 * Domain: Databases
 * ID: 0653
 */
exports.databasesTool_0653 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0653:', error);
    throw error;
  }
};
