/**
 * Generated Tool: databasesTool_0992
 * Domain: Databases
 * ID: 0992
 */
exports.databasesTool_0992 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0992:', error);
    throw error;
  }
};
