/**
 * Generated Tool: databasesTool_0519
 * Domain: Databases
 * ID: 0519
 */
exports.databasesTool_0519 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0519:', error);
    throw error;
  }
};
