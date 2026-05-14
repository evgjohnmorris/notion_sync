/**
 * Generated Tool: databasesTool_0573
 * Domain: Databases
 * ID: 0573
 */
exports.databasesTool_0573 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0573:', error);
    throw error;
  }
};
