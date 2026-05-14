/**
 * Generated Tool: databasesTool_0586
 * Domain: Databases
 * ID: 0586
 */
exports.databasesTool_0586 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0586:', error);
    throw error;
  }
};
