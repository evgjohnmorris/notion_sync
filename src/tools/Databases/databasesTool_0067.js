/**
 * Generated Tool: databasesTool_0067
 * Domain: Databases
 * ID: 0067
 */
exports.databasesTool_0067 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0067:', error);
    throw error;
  }
};
