/**
 * Generated Tool: databasesTool_0045
 * Domain: Databases
 * ID: 0045
 */
exports.databasesTool_0045 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0045:', error);
    throw error;
  }
};
