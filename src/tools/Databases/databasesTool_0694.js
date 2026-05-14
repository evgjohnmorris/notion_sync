/**
 * Generated Tool: databasesTool_0694
 * Domain: Databases
 * ID: 0694
 */
exports.databasesTool_0694 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0694:', error);
    throw error;
  }
};
