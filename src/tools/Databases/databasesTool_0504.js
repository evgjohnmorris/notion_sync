/**
 * Generated Tool: databasesTool_0504
 * Domain: Databases
 * ID: 0504
 */
exports.databasesTool_0504 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0504:', error);
    throw error;
  }
};
