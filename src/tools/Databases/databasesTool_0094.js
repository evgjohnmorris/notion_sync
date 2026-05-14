/**
 * Generated Tool: databasesTool_0094
 * Domain: Databases
 * ID: 0094
 */
exports.databasesTool_0094 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0094:', error);
    throw error;
  }
};
