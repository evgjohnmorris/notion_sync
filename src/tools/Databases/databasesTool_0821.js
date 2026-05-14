/**
 * Generated Tool: databasesTool_0821
 * Domain: Databases
 * ID: 0821
 */
exports.databasesTool_0821 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0821:', error);
    throw error;
  }
};
