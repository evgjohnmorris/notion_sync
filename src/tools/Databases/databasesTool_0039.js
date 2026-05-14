/**
 * Generated Tool: databasesTool_0039
 * Domain: Databases
 * ID: 0039
 */
exports.databasesTool_0039 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0039:', error);
    throw error;
  }
};
