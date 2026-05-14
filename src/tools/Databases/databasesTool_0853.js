/**
 * Generated Tool: databasesTool_0853
 * Domain: Databases
 * ID: 0853
 */
exports.databasesTool_0853 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0853:', error);
    throw error;
  }
};
