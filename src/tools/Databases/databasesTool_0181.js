/**
 * Generated Tool: databasesTool_0181
 * Domain: Databases
 * ID: 0181
 */
exports.databasesTool_0181 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0181:', error);
    throw error;
  }
};
