/**
 * Generated Tool: databasesTool_0889
 * Domain: Databases
 * ID: 0889
 */
exports.databasesTool_0889 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0889:', error);
    throw error;
  }
};
