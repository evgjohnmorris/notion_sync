/**
 * Generated Tool: databasesTool_0085
 * Domain: Databases
 * ID: 0085
 */
exports.databasesTool_0085 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0085:', error);
    throw error;
  }
};
