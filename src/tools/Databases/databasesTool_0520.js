/**
 * Generated Tool: databasesTool_0520
 * Domain: Databases
 * ID: 0520
 */
exports.databasesTool_0520 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0520:', error);
    throw error;
  }
};
