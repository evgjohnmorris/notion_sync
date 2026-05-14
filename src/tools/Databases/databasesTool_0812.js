/**
 * Generated Tool: databasesTool_0812
 * Domain: Databases
 * ID: 0812
 */
exports.databasesTool_0812 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0812:', error);
    throw error;
  }
};
