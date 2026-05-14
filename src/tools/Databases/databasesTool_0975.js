/**
 * Generated Tool: databasesTool_0975
 * Domain: Databases
 * ID: 0975
 */
exports.databasesTool_0975 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0975:', error);
    throw error;
  }
};
